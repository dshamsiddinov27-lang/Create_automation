import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Search for a news article', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/news');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByTestId('news-search-input');
    await expect(searchInput).toBeVisible({ timeout: 15000 });
    await searchInput.fill('education');

    const searchBtn = page.getByTestId('news-search-btn');
    await expect(searchBtn).toBeVisible({ timeout: 10000 });
    await searchBtn.click();
    await page.waitForLoadState('domcontentloaded');

    const articles = page.getByText(/education/i);
    await expect(articles.first()).toBeVisible({ timeout: 15000 });
  });
});