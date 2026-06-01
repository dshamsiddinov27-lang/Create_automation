import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Check Category Filter 10', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const checkbox = page.getByTestId('category-01KT1A1A7TQRX2E16TXEX7WA32');
    await expect(checkbox).toBeVisible();
    await checkbox.click();

    await expect(checkbox).toBeChecked();
  });
});