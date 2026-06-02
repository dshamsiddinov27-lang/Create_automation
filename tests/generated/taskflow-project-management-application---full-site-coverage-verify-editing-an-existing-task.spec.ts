import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify editing an existing task', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('task-edit-btn-2')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-edit-btn-2').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('task-modal-title')).toHaveText('Edit Task');

    await expect(page.getByTestId('task-title-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-title-input').click();
    await page.getByTestId('task-title-input').fill('Updated Title - Fix Bugs');

    await expect(page.getByTestId('task-priority-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-priority-select').selectOption('high');

    await expect(page.getByTestId('task-save-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-save-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).not.toBeVisible();
    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
  });
});