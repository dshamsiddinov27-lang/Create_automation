import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify header controls and user dropdown menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('notification-btn')).toBeVisible();
    await expect(page.getByTestId('notification-badge')).toBeVisible();

    await page.getByTestId('user-menu-trigger-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('user-dropdown-menu')).toBeVisible();
    await expect(page.getByTestId('user-profile-link')).toBeVisible();
    await expect(page.getByTestId('user-account-settings-link')).toBeVisible();
    await expect(page.getByTestId('user-logout-btn')).toBeVisible();
  });
});