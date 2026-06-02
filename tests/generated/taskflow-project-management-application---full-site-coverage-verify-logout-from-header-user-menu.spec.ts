import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify logout from header user menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('user-menu-trigger-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('user-menu-trigger-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('user-logout-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('user-logout-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-page')).toBeVisible({ timeout: 15000 });
  });
});