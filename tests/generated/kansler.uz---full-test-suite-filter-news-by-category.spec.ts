import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Filter news by category', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/news');
    await page.waitForLoadState('domcontentloaded');

    const categoryFilter = page.getByTestId('news-category-filter');
    await expect(categoryFilter).toBeVisible({ timeout: 20000 });
    await categoryFilter.selectOption('Education');

    const educationNews = page.locator('.news-article').filter({ hasText: 'Education' });
    await expect(educationNews).toBeVisible({ timeout: 20000 });
  });
});