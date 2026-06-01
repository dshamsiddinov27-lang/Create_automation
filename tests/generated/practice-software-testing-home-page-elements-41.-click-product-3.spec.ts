import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('41. Click Product 3', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A909QT36MY4ECRZAAF2').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('product-01KT1A1A909QT36MY4ECRZAAF2')).toBeVisible();
  });
});