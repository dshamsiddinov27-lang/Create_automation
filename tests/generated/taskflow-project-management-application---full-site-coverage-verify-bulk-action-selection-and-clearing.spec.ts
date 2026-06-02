import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk action selection and clearing', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const firstCheckbox = page.getByTestId('task-checkbox-1');
    await expect(firstCheckbox).toBeVisible({ timeout: 15000 });
    await firstCheckbox.check();

    const secondCheckbox = page.getByTestId('task-checkbox-2');
    await expect(secondCheckbox).toBeVisible({ timeout: 15000 });
    await secondCheckbox.check();

    const bulkActionsBar = page.getByTestId('bulk-actions-bar');
    await expect(bulkActionsBar).toBeVisible({ timeout: 15000 });

    const bulkSelectedCount = page.getByTestId('bulk-selected-count');
    await expect(bulkSelectedCount).toBeVisible({ timeout: 15000 });
    await expect(bulkSelectedCount).toContainText('2 selected');

    const bulkClearBtn = page.getByTestId('bulk-clear-btn');
    await expect(bulkClearBtn).toBeVisible({ timeout: 15000 });
    await bulkClearBtn.click();
    await page.waitForLoadState('networkidle');

    await expect(bulkActionsBar).not.toBeVisible();
  });
});