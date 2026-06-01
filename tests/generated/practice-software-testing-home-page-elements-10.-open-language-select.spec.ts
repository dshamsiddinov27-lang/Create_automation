import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Open Language Select', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('language-select').click();
    await expect(page.getByTestId('language-select')).toBeVisible();
  });
});