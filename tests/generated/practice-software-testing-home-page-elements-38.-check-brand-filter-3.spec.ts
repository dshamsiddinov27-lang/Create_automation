import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Check Brand Filter 3', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    const checkbox = page.getByTestId('brand-01kt1afzzfhqdyza1f1dbagr5n');
    await expect(checkbox).toBeVisible();
    await checkbox.click();

    await expect(checkbox).toBeChecked();
  });
});