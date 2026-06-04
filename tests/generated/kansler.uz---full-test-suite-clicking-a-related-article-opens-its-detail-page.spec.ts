import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Clicking a related article opens its detail page', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/news/1');
    await page.waitForLoadState('domcontentloaded');

    const relatedNewsCard = page.locator('[data-testid="related-news-card"]');
    await expect(relatedNewsCard.first()).toBeVisible({ timeout: 20000 });
    await relatedNewsCard.first().click();
    await page.waitForLoadState('domcontentloaded');

    // Verify that the new article detail page is opened
    const articleDetail = page.locator('article'); // Assuming the article detail page contains an <article> element
    await expect(articleDetail.first()).toBeVisible({ timeout: 20000 });
  });
});