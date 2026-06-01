import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Search Query', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const inputElement = page.getByRole('textbox');
    await expect(inputElement).toBeVisible();
    await inputElement.click();

    await expect(inputElement).toHaveAttribute('data-test', 'search-query');
  });
});