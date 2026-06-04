import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Clicking a news card opens the news detail page', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const newsCard = page.getByTestId('news-card').first();
    await expect(newsCard).toBeVisible({ timeout: 20000 });
    await newsCard.click();
    await page.waitForLoadState('domcontentloaded');

    // Assuming the news detail page has some unique identifier to verify it opened
    const newsDetail = page.getByTestId('news-detail');
    await expect(newsDetail).toBeVisible({ timeout: 20000 });
  });
});