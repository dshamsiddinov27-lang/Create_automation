import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Courses section is visible on home page', async ({ page }) => {
    await page.goto('/home');
    await page.waitForLoadState('domcontentloaded');

    const coursesSection = page.locator('[data-testid="home-courses-section"]');
    await expect(coursesSection).toBeVisible({ timeout: 20000 });

    const courseCard = page.locator('[data-testid="course-card"]');
    await expect(courseCard.first()).toBeVisible({ timeout: 20000 });
  });
});