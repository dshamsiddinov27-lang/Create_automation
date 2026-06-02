import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify logout from sidebar footer menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('sidebar-logout-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('sidebar-logout-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-page')).toBeVisible({ timeout: 15000 });
  });
});