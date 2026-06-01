import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Product 5', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const productElement = page.getByTestId('product-01KT1A1A98DMFBKYSPNPQ5P1D7');
    await expect(productElement).toBeVisible();
    await productElement.click();
    await page.waitForLoadState('networkidle');

    await expect(productElement).toBeVisible();
  });
});