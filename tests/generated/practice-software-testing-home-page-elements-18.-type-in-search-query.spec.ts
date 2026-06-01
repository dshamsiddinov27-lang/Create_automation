import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('18. Type in Search Query', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByTestId('search-query');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('Hammer');

    await expect(searchInput).toHaveValue('Hammer');
  });
});