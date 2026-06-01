import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Home', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navHomeLink = page.locator('a[data-test="nav-home"]');
    await expect(navHomeLink).toBeVisible();
    await navHomeLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navHomeLink).toHaveAttribute('data-test', 'nav-home');
  });
});