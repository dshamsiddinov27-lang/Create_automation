import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('8. Click Nav Contact', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('nav-contact').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('nav-contact')).toBeVisible();
  });
});