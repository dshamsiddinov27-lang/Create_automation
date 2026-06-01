import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Product 7', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    const productElement = page.getByTestId('product-01KT1A1A9DRR1B16QCSA263XD4');
    await expect(productElement).toBeVisible();
    await productElement.click();
    await page.waitForLoadState('networkidle');

    await expect(productElement).toBeVisible();
  });
});