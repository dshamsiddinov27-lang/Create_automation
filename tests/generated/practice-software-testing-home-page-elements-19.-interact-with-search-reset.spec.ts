import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Search Reset', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const button = page.getByRole('button', { name: /search reset/i });
    await expect(button).toBeVisible();
    await button.click();
    await page.waitForLoadState('networkidle');

    await expect(button).toHaveAttribute('data-test', 'search-reset');
  });
});