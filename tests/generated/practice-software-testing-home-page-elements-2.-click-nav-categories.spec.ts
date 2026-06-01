import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Nav Categories', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('nav-categories').click();
    await expect(page.getByTestId('nav-categories')).toBeVisible();
  });
});