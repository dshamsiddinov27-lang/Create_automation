import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Select Language NL', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('language-select').click();
    await page.getByTestId('lang-nl').click();

    await expect(page.getByTestId('lang-nl')).toBeVisible();
  });
});