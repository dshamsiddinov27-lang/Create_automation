import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Search Reset', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.locator('[data-test="search-query"]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('Hammer');

    await page.locator('[data-test="search-reset"]').click();
    await page.waitForLoadState('networkidle');

    await expect(searchInput).toHaveValue('');
  });
});