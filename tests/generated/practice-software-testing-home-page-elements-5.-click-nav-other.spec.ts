import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('5. Click Nav Other', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('nav-categories').click();
    await page.waitForLoadState('networkidle');

    await page.getByTestId('nav-other').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('nav-other')).toBeVisible();
  });
});