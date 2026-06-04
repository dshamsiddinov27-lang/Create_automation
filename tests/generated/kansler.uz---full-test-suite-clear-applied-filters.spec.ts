import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Clear applied filters', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/courses');
    await page.waitForLoadState('domcontentloaded');

    // Ensure a category filter is active
    const activeFilter = page.getByTestId('active-category-filter');
    await expect(activeFilter).toBeVisible({ timeout: 10000 });

    // Click the clear filters button
    const clearFiltersBtn = page.getByTestId('clear-filters-btn');
    await expect(clearFiltersBtn).toBeVisible({ timeout: 10000 });
    await clearFiltersBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // Verify all courses are shown
    const allCourses = page.getByTestId('course-item');
    await expect(allCourses.first()).toBeVisible({ timeout: 10000 });

    // Verify filter tags disappear
    const filterTags = page.getByTestId('filter-tag');
    await expect(filterTags).toHaveCount(0, { timeout: 10000 });
  });
});