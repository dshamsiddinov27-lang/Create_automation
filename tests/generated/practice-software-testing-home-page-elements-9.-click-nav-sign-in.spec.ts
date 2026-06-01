import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('9. Click Nav Sign In', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('nav-sign-in').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('nav-sign-in')).toBeVisible();
  });
});