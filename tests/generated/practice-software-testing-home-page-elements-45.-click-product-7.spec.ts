import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Product 7', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A9DRR1B16QCSA263XD4').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('product-01KT1A1A9DRR1B16QCSA263XD4')).toBeVisible();
  });
});