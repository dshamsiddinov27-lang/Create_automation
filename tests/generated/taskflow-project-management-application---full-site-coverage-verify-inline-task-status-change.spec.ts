import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify inline task status change', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const statusSelect = page.getByTestId('task-status-select-1');
    await expect(statusSelect).toBeVisible();
    await statusSelect.click();
    await statusSelect.selectOption('done');

    await page.waitForLoadState('networkidle');

    const successToast = page.getByTestId('toast-success');
    await expect(successToast).toBeVisible();
  });
});