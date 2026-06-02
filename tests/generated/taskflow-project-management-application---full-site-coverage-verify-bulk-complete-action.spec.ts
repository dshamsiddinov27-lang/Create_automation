import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk complete action', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required, using default credentials as no specific credentials are provided in the scenario
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('default_username');
      await page.getByLabel(/password/i).fill('default_password');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('select-all-checkbox')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('select-all-checkbox').click();

    await expect(page.getByTestId('bulk-actions-bar')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('bulk-complete-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('bulk-complete-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('bulk-actions-bar')).not.toBeVisible({ timeout: 15000 });
  });
});