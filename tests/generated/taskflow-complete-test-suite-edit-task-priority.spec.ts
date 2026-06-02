import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Edit task priority', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there's a way to identify and change the task priority
    // Since the scenario does not specify how to change the priority, 
    // this part is left as a placeholder for the actual implementation.
    // Replace 'Change Priority Button' and 'Task Updated Text' with actual values.

    await page.getByRole('button', { name: 'Change Priority Button' }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Task Updated Text')).toBeVisible();
  });
});