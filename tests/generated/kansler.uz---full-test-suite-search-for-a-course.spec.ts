import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Search for a course', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/courses');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByTestId('search-input');
    await expect(searchInput).toBeVisible({ timeout: 15000 });
    await searchInput.fill('Python');

    const searchBtn = page.getByTestId('search-btn');
    await expect(searchBtn).toBeVisible({ timeout: 10000 });
    await searchBtn.click();
    await page.waitForLoadState('domcontentloaded');

    const courseResults = page.getByText(/Python/i);
    await expect(courseResults.first()).toBeVisible({ timeout: 10000 });

    const resultsCount = page.getByTestId('search-results-count');
    await expect(resultsCount).toBeVisible({ timeout: 10000 });
  });
});