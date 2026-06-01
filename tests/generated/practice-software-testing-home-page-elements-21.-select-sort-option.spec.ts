import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Select Sort Option', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.waitForLoadState('domcontentloaded');

    const sortDropdown = page.getByTestId('sort');
    await expect(sortDropdown).toBeVisible();
    await sortDropdown.selectOption({ label: 'Name (A - Z)' });

    await expect(sortDropdown).toBeVisible();
  });
});