import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('20. Click Search Submit', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByTestId('search-query');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('Hammer');

    await page.getByTestId('search-submit').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('search-submit')).toBeVisible();
  });
});