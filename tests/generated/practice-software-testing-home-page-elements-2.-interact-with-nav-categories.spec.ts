import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Nav Categories', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const button = page.getByRole('button');
    await expect(button.first()).toBeVisible();
    await button.first().click();
    await page.waitForLoadState('networkidle');

    await expect(button.first()).toHaveAttribute('data-test', 'nav-categories');
  });
});