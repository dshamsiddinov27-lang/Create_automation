import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Power Tools', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const navPowerToolsLink = page.locator('a[data-test="nav-power-tools"]');
    await expect(navPowerToolsLink).toBeVisible();
    await navPowerToolsLink.click();
    await page.waitForLoadState('networkidle');

    await expect(navPowerToolsLink).toHaveAttribute('data-test', 'nav-power-tools');
  });
});