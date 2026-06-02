import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify logout from sidebar footer menu', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required to reach the sidebar
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('sidebar-logout-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('sidebar-logout-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-page')).toBeVisible({ timeout: 15000 });
  });
});