import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify logout from header user menu', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required to access the application
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('user-menu-trigger-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('user-menu-trigger-btn').click();

    await expect(page.getByTestId('user-logout-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('user-logout-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-page')).toBeVisible({ timeout: 15000 });
  });
});