import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Search for a news article from header', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByTestId('search-input');
    await expect(searchInput).toBeVisible({ timeout: 15000 });
    await searchInput.fill('education news');
    await searchInput.press('Enter');

    await page.waitForLoadState('domcontentloaded');
    const results = page.getByText(/education news/i);
    await expect(results).toBeVisible({ timeout: 15000 });
  });
});