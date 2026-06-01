import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('49. Click Pagination Next', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('pagination-next').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('pagination-next')).toBeVisible();
  });
});