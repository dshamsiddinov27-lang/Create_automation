import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('News page loads successfully', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/news');
    await page.waitForLoadState('domcontentloaded');

    const newsPage = page.locator('[data-testid="news-page"]');
    await expect(newsPage).toBeVisible({ timeout: 20000 });

    const newsCards = page.locator('[data-testid="news-card"]');
    await expect(newsCards).toBeVisible({ timeout: 20000 });

    const newsCardCount = await newsCards.count();
    for (let i = 0; i < newsCardCount; i++) {
      const newsCard = newsCards.nth(i);
      await expect(newsCard.locator('[data-testid="news-title"]')).toBeVisible();
      await expect(newsCard.locator('[data-testid="news-image"]')).toBeVisible();
      await expect(newsCard.locator('[data-testid="news-date"]')).toBeVisible();
      await expect(newsCard.locator('[data-testid="news-category"]')).toBeVisible();
    }
  });
});