import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Select Language FR', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('language-select').click();
    await page.waitForLoadState('networkidle');

    await page.getByTestId('lang-fr').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('lang-fr')).toBeVisible();
  });
});