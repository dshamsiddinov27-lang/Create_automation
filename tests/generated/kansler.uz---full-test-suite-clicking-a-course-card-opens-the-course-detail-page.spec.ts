import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Clicking a course card opens the course detail page', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const courseCard = page.getByTestId('course-card').first();
    await expect(courseCard).toBeVisible({ timeout: 20000 });
    await courseCard.click();
    await page.waitForLoadState('domcontentloaded');

    const url = page.url();
    expect(url).toMatch(/\/courses\/|\/course\//);
  });
});