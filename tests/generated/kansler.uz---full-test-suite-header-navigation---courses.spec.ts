import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Header navigation - Courses', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const coursesLink = page.getByTestId('nav-courses')
      .or(page.getByRole('link', { name: /courses/i }));
    await expect(coursesLink.first()).toBeVisible({ timeout: 10000 });
    await coursesLink.first().click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL(/\/courses|\/catalog/);
  });
});