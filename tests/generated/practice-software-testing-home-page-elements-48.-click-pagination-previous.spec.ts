import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('48. Click Pagination Previous', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('pagination-prev').click();
    await expect(page.getByTestId('pagination-prev')).toBeVisible();
  });
});