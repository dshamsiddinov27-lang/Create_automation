import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk complete action', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('select-all-checkbox')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('select-all-checkbox').check();

    await expect(page.getByTestId('bulk-actions-bar')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('bulk-complete-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('bulk-complete-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('bulk-actions-bar')).not.toBeVisible({ timeout: 15000 });
  });
});