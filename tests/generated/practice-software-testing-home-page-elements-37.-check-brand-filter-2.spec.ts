import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Check Brand Filter 2', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const checkbox = page.getByTestId('brand-01KT1A19WF7WYQV05QZBZ0E68G');
    await expect(checkbox).toBeVisible();
    await checkbox.click();

    await expect(checkbox).toBeChecked();
  });
});