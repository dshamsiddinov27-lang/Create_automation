import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify editing an existing task', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('task-edit-btn-2').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).toBeVisible();
    await expect(page.getByTestId('task-modal-title')).toContainText('Edit Task');

    const titleInput = page.getByTestId('task-title-input');
    await expect(titleInput).toBeVisible();
    await titleInput.click();
    await titleInput.fill('Updated Title - Fix Bugs');

    const prioritySelect = page.getByTestId('task-priority-select');
    await expect(prioritySelect).toBeVisible();
    await prioritySelect.selectOption('high');

    await page.getByTestId('task-save-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).not.toBeVisible();
    await expect(page.getByTestId('toast-success')).toBeVisible();
  });
});