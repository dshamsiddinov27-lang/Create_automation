import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Interact with Language Select', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const button = page.getByRole('button', { name: /language select/i });
    await expect(button).toBeVisible();
    await button.click();

    await expect(button).toHaveAttribute('data-test', 'language-select');
  });
});