import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Language NL', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const languageLink = page.getByRole('link', { name: 'A' });
    await expect(languageLink).toBeVisible();
    await languageLink.click();
    await page.waitForLoadState('networkidle');

    const triggeredTag = page.locator('a[data-test="lang-nl"]');
    await expect(triggeredTag).toBeVisible();
  });
});