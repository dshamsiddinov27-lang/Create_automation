import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Language TR', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const linkElement = page.locator('a[data-test="lang-tr"]');
    await expect(linkElement).toBeVisible();
    await linkElement.click();
    await page.waitForLoadState('networkidle');

    await expect(linkElement).toHaveAttribute('data-test', 'lang-tr');
  });
});