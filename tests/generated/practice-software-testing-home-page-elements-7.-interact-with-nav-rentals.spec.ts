import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Rentals', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navRentalsLink = page.locator('a[data-test="nav-rentals"]');
    await expect(navRentalsLink).toBeVisible();
    await navRentalsLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navRentalsLink).toHaveAttribute('data-test', 'nav-rentals');
  });
});