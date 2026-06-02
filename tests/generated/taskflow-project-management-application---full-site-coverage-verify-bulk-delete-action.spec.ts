import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk delete action', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Login step if required
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    // Check the checkboxes
    await expect(page.getByTestId('task-checkbox-1')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-checkbox-1').click();

    await expect(page.getByTestId('task-checkbox-2')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-checkbox-2').click();

    // Click the bulk delete button
    await expect(page.getByTestId('bulk-delete-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('bulk-delete-btn').click();
    await page.waitForLoadState('networkidle');

    // Verify the success toast is visible
    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
  });
});