import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Hand Tools', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navHandToolsLink = page.locator('a[data-test="nav-hand-tools"]');
    await expect(navHandToolsLink).toBeVisible();
    await navHandToolsLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navHandToolsLink).toHaveAttribute('data-test', 'nav-hand-tools');
  });
});