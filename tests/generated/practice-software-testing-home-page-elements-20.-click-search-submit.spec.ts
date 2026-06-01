import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('Click Search Submit', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByTestId('search-query');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('Hammer');

    await page.getByTestId('search-submit').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('search-submit')).toBeVisible();
  });
});