import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify inline task status change', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required, add login steps
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    // Select option "done" from dropdown with test id "task-status-select-1"
    await expect(page.getByTestId('task-status-select-1')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-status-select-1').selectOption({ label: 'done' });

    // Verify that the success toast is visible
    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
  });
});