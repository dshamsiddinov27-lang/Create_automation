import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create task with all fields', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there are specific fields to fill for creating a task
    // These fields are not specified in the scenario, so we will assume generic field names
    const taskNameInput = page.getByRole('textbox', { name: /task name/i });
    await expect(taskNameInput).toBeVisible();
    await taskNameInput.fill('New Task Name');

    const taskDescriptionInput = page.getByRole('textbox', { name: /task description/i });
    await expect(taskDescriptionInput).toBeVisible();
    await taskDescriptionInput.fill('This is a description of the new task.');

    const taskDueDateInput = page.getByRole('textbox', { name: /due date/i });
    await expect(taskDueDateInput).toBeVisible();
    await taskDueDateInput.fill('2023-12-31');

    const taskPriorityInput = page.getByRole('textbox', { name: /priority/i });
    await expect(taskPriorityInput).toBeVisible();
    await taskPriorityInput.fill('High');

    await page.getByRole('button', { name: /create task/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Task created successfully')).toBeVisible();
  });
});