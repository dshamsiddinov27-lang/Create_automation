import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('42. Click Product 4', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A92JD5FHX4V3X311KSD').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('product-01KT1A1A92JD5FHX4V3X311KSD')).toBeVisible();
  });
});