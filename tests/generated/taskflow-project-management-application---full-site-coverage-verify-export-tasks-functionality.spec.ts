import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify export tasks functionality', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('export-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('export-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
  });
});