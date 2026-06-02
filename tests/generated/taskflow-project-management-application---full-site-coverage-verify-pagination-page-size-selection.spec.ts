import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify pagination page size selection', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Login prerequisite
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    // Select page size
    await expect(page.getByTestId('page-size-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('page-size-select').selectOption('25');
    await page.waitForLoadState('networkidle');

    // Verify task row visibility
    await expect(page.getByTestId('task-row-15')).toBeVisible({ timeout: 15000 });
  });
});