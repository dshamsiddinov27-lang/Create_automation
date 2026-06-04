import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Share a news article', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/news/1');
    await page.waitForLoadState('domcontentloaded');

    const shareButton = page.locator('[data-testid="news-share-btn"]');
    await expect(shareButton).toBeVisible({ timeout: 20000 });
    await shareButton.click();

    const shareOptions = page.locator('[data-testid="share-options"]');
    await expect(shareOptions).toBeVisible({ timeout: 20000 });
  });
});