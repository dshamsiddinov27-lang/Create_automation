import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Nav Home', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('nav-home').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('nav-home')).toBeVisible();
  });
});