import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Edit task title', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming the task title can be edited by clicking on it and entering a new title
    const taskTitleInput = page.getByRole('textbox');
    await expect(taskTitleInput).toBeVisible();
    await taskTitleInput.click();
    await taskTitleInput.fill('New Task Title');

    // Assuming there is a save button to confirm the edit
    await page.getByRole('button', { name: /save|сохранить/i }).click();
    await page.waitForLoadState('networkidle');

    // Verify the task title is updated
    await expect(page.getByText('New Task Title')).toBeVisible();
  });
});