import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Contact', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navContactLink = page.locator('a[data-test="nav-contact"]');
    await expect(navContactLink).toBeVisible();
    await navContactLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navContactLink).toHaveAttribute('data-test', 'nav-contact');
  });
});