import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Product 1', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A8T783GREARDVTXKG6N').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('product-01KT1A1A8T783GREARDVTXKG6N')).toBeVisible();
  });
});