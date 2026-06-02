import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify header controls and user dropdown menu', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required, using default credentials as no specific ones are provided
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('default_username');
      await page.getByLabel(/password/i).fill('default_password');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('notification-btn')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('notification-badge')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('user-menu-trigger-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('user-menu-trigger-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('user-dropdown-menu')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('user-profile-link')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('user-account-settings-link')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('user-logout-btn')).toBeVisible({ timeout: 15000 });
  });
});