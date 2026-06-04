import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Search input opens', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const searchButton = page.getByTestId('header-search-btn')
      .or(page.getByRole('button', { name: /search/i }));
    await expect(searchButton.first()).toBeVisible({ timeout: 10000 });
    await searchButton.first().click();

    const searchInput = page.getByTestId('search-input')
      .or(page.getByTestId('search-bar'));
    await expect(searchInput.first()).toBeVisible({ timeout: 10000 });
    await expect(searchInput.first()).toBeFocused();
  });
});