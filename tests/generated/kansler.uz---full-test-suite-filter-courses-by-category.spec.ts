import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Filter courses by category', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/courses');
    await page.waitForLoadState('domcontentloaded');

    const categoryFilter = page.locator('[data-testid="category-filter"]');
    await expect(categoryFilter).toBeVisible({ timeout: 20000 });
    await categoryFilter.click();

    const itCategoryOption = page.getByRole('option', { name: /IT/i });
    await expect(itCategoryOption).toBeVisible({ timeout: 10000 });
    await itCategoryOption.click();
    await page.waitForLoadState('domcontentloaded');

    const itCourses = page.locator('.course-card').filter({ hasText: 'IT' });
    await expect(itCourses).toHaveCountGreaterThan(0);

    const activeFilterTag = page.locator('[data-testid="active-filter-tag"]');
    await expect(activeFilterTag).toBeVisible({ timeout: 10000 });
  });
});