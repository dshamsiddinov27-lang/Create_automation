import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('All Courses link works', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const allCoursesLink = page.getByTestId('all-courses-link')
      .or(page.getByRole('link', { name: /all courses/i }));
    await expect(allCoursesLink.first()).toBeVisible({ timeout: 10000 });
    await allCoursesLink.first().click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL(/.*\/courses/);
  });
});