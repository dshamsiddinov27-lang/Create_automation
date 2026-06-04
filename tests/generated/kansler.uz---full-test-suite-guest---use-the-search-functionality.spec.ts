import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - use the search functionality', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByTestId('search-input')
      .or(page.getByPlaceholder(/search|qidiruv/i))
      .or(page.locator('input[type="text"]'))
      .first();
    await expect(searchInput).toBeVisible({ timeout: 15000 });
    await searchInput.fill('Python');
    await searchInput.press('Enter');

    const searchResults = page.getByText(/results|natijalar/i)
      .or(page.getByTestId('search-results'))
      .first();
    await expect(searchResults).toBeVisible({ timeout: 20000 });
  });
});