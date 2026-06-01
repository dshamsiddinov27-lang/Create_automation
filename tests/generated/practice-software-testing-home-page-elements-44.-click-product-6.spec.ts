import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Product 6', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A9A7SDRRA7WDA2KPA6J').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('product-01KT1A1A9A7SDRRA7WDA2KPA6J')).toBeVisible();
  });
});