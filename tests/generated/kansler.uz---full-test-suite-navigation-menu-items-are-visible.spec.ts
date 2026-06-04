import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Navigation menu items are visible', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const homeLink = page.getByTestId('nav-home')
      .or(page.getByRole('link', { name: /home/i }));
    await expect(homeLink.first()).toBeVisible({ timeout: 10000 });

    const coursesLink = page.getByTestId('nav-courses')
      .or(page.getByRole('link', { name: /courses/i }));
    await expect(coursesLink.first()).toBeVisible({ timeout: 10000 });

    const newsLink = page.getByTestId('nav-news')
      .or(page.getByRole('link', { name: /news/i }));
    await expect(newsLink.first()).toBeVisible({ timeout: 10000 });
  });
});