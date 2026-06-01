import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Check Category Filter 2', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const checkbox = page.getByTestId('category-01KT1A1A7S17V4DXWX3BQRY9BM');
    await expect(checkbox).toBeVisible();
    await checkbox.click();

    await expect(checkbox).toBeChecked();
  });
});