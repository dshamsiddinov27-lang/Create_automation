import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify Add Task modal UI and validation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const addTaskBtn = page.getByTestId('add-task-btn');
    await expect(addTaskBtn).toBeVisible({ timeout: 15000 });
    await addTaskBtn.click();
    await page.waitForLoadState('networkidle');

    const taskModal = page.getByTestId('task-modal');
    await expect(taskModal).toBeVisible({ timeout: 15000 });

    const taskModalTitle = page.getByTestId('task-modal-title');
    await expect(taskModalTitle).toBeVisible({ timeout: 15000 });
    await expect(taskModalTitle).toContainText('Add New Task');

    const taskSaveBtn = page.getByTestId('task-save-btn');
    await expect(taskSaveBtn).toBeVisible({ timeout: 15000 });
    await taskSaveBtn.click();
    await page.waitForLoadState('networkidle');

    const titleErrorMsg = page.getByTestId('title-error-msg');
    await expect(titleErrorMsg).toBeVisible({ timeout: 15000 });

    const taskCancelBtn = page.getByTestId('task-cancel-btn');
    await expect(taskCancelBtn).toBeVisible({ timeout: 15000 });
    await taskCancelBtn.click();
    await page.waitForLoadState('networkidle');

    await expect(taskModal).not.toBeVisible();
  });
});