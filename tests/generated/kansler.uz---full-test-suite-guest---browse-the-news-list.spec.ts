import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - browse the news list', async ({ page }) => {
    // Given the user is not logged in (guest)
    // No login action needed as the user is a guest

    // When the user navigates to "https://kansler-roan.vercel.app/news"
    await page.goto('https://kansler-roan.vercel.app/news');
    await page.waitForLoadState('domcontentloaded');

    // Then the news articles are visible
    const newsArticles = page.getByRole('article');
    await expect(newsArticles.first()).toBeVisible({ timeout: 20000 });
  });
});