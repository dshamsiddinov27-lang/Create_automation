import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('News section is visible on home page', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const newsSection = page.locator('[data-testid="home-news-section"]');
    await expect(newsSection).toBeVisible({ timeout: 20000 });

    const newsCard = page.locator('[data-testid="news-card"]');
    await expect(newsCard.first()).toBeVisible({ timeout: 20000 });
  });
});