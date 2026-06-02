import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Edit task description', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there's a way to locate and edit a task description
    const taskDescriptionInput = page.getByRole('textbox');
    await expect(taskDescriptionInput).toBeVisible();
    await taskDescriptionInput.click();
    await taskDescriptionInput.fill('Updated task description');

    // Assuming there's a save or update button to confirm the edit
    await page.getByRole('button', { name: /save|update/i }).click();
    await page.waitForLoadState('networkidle');

    // Verify that the task description is updated
    await expect(page.getByText('Updated task description')).toBeVisible();
  });
});