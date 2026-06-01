import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Language FR', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const languageLink = page.getByRole('link', { name: 'A' });
    await expect(languageLink).toBeVisible();
    await languageLink.click();
    await page.waitForLoadState('networkidle');

    await expect(languageLink).toHaveAttribute('data-test', 'lang-fr');
  });
});