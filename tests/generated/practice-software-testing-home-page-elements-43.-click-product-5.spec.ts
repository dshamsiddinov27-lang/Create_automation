import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Product 5', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A98DMFBKYSPNPQ5P1D7').click();
    await expect(page.getByTestId('product-01KT1A1A98DMFBKYSPNPQ5P1D7')).toBeVisible();
  });
});