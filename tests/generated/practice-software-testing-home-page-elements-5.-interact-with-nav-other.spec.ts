import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Other', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navOtherLink = page.locator('a[data-test="nav-other"]');
    await expect(navOtherLink).toBeVisible();
    await navOtherLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navOtherLink).toHaveAttribute('data-test', 'nav-other');
  });
});