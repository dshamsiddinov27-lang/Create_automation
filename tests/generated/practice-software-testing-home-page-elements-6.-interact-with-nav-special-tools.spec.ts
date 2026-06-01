import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Special Tools', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navSpecialToolsLink = page.locator('a[data-test="nav-special-tools"]');
    await expect(navSpecialToolsLink).toBeVisible();
    await navSpecialToolsLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navSpecialToolsLink).toHaveAttribute('data-test', 'nav-special-tools');
  });
});