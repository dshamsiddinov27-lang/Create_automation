import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('3. Click Nav Hand Tools', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('nav-categories').click();
    await page.waitForLoadState('networkidle');

    await page.getByTestId('nav-hand-tools').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('nav-hand-tools')).toBeVisible();
  });
});