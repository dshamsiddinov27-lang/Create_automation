import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - navigate to favorites page → login required', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Navigate to "/favorites"
    await page.goto('https://kansler-roan.vercel.app/favorites');
    await page.waitForLoadState('domcontentloaded');

    // Verify redirection to login page
    await expect(page).toHaveURL(/.*login.*/);
  });
});