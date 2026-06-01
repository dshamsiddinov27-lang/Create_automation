import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Check Eco Friendly Filter', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const ecoFriendlyCheckbox = page.getByTestId('eco-friendly-filter');
    await expect(ecoFriendlyCheckbox).toBeVisible();
    await ecoFriendlyCheckbox.check();

    await expect(ecoFriendlyCheckbox).toBeChecked();
  });
});