import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Clicking the logo navigates to the home page', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    // Simulate the user being on another page
    await page.goto('https://kansler-roan.vercel.app/another-page');
    await page.waitForLoadState('domcontentloaded');

    const logo = page.locator('[data-testid="header-logo"]');
    await expect(logo).toBeVisible({ timeout: 10000 });
    await logo.click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL('https://kansler-roan.vercel.app/home');
  });
});