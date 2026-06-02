import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify Add Task modal UI and validation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('add-task-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).toBeVisible();
    await expect(page.getByTestId('task-modal-title')).toContainText('Add New Task');

    await page.getByTestId('task-save-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('title-error-msg')).toBeVisible();

    await page.getByTestId('task-cancel-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).not.toBeVisible();
  });
});