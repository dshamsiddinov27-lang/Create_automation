import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Language DE', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const linkElement = page.getByRole('link', { name: 'A' });
    await expect(linkElement).toBeVisible();
    await linkElement.click();
    await page.waitForLoadState('networkidle');

    await expect(linkElement).toHaveAttribute('data-test', 'lang-de');
  });
});