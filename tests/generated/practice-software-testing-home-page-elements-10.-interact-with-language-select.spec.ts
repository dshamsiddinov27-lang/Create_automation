import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Language Select', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const button = page.getByRole('button');
    await expect(button.first()).toBeVisible();
    await button.first().click();

    await expect(button.first()).toHaveAttribute('data-test', 'language-select');
  });
});