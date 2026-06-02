import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify header controls and user dropdown menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

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