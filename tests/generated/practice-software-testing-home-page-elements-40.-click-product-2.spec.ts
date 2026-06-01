import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Product 2', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('product-01KT1A1A8Y6WH5229TDAEXP74T').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('product-01KT1A1A8Y6WH5229TDAEXP74T')).toBeVisible();
  });
});