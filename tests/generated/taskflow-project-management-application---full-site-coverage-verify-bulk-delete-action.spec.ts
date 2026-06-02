import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk delete action', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const checkbox1 = page.getByTestId('task-checkbox-1');
    await expect(checkbox1).toBeVisible({ timeout: 15000 });
    await checkbox1.click();

    const checkbox2 = page.getByTestId('task-checkbox-2');
    await expect(checkbox2).toBeVisible({ timeout: 15000 });
    await checkbox2.click();

    const bulkDeleteBtn = page.getByTestId('bulk-delete-btn');
    await expect(bulkDeleteBtn).toBeVisible({ timeout: 15000 });
    await bulkDeleteBtn.click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
  });
});