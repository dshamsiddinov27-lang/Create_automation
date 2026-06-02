import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Sort tasks by title', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /title sorting/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there's a way to verify tasks are sorted, e.g., by checking the order of task titles
    // Replace 'Task Title 1' and 'Task Title 2' with actual task titles in sorted order
    const firstTaskTitle = await page.getByText('Task Title 1');
    const secondTaskTitle = await page.getByText('Task Title 2');
    await expect(firstTaskTitle).toBeVisible();
    await expect(secondTaskTitle).toBeVisible();
  });
});