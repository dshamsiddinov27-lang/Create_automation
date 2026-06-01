import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Nav Power Tools', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('nav-categories').click();
    await page.waitForLoadState('networkidle');

    await page.getByTestId('nav-power-tools').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('nav-power-tools')).toBeVisible();
  });
});