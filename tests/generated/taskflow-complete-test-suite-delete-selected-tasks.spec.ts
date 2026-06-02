import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Delete selected tasks', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there are checkboxes or similar elements to select tasks
    const taskCheckboxes = page.getByRole('checkbox');
    await expect(taskCheckboxes.first()).toBeVisible();
    await taskCheckboxes.first().check();

    // Assuming there is a delete button to delete selected tasks
    await page.getByRole('button', { name: /delete/i }).click();
    await page.waitForLoadState('networkidle');

    // Verify tasks are deleted, assuming there's a message or no tasks visible
    await expect(page.getByText('No tasks available')).toBeVisible();
  });
});