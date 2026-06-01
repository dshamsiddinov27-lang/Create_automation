import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Sign in', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navSignInLink = page.locator('a[data-test="nav-sign-in"]');
    await expect(navSignInLink).toBeVisible();
    await navSignInLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navSignInLink).toHaveAttribute('data-test', 'nav-sign-in');
  });
});