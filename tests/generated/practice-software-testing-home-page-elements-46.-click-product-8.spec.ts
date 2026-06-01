import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('46. Click Product 8', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A9FZM890CR17WQK56N2').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('product-01KT1A1A9FZM890CR17WQK56N2')).toBeVisible();
  });
});