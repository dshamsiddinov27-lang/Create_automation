import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Search Query', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.locator('input[data-test="search-query"]');
    await expect(searchInput).toBeVisible();
    await searchInput.click();

    await expect(searchInput).toHaveAttribute('data-test', 'search-query');
  });
});