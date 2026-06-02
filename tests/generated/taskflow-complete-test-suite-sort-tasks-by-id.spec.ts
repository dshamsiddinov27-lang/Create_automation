import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Sort tasks by ID', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: 'ID sorting' }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a way to verify tasks are sorted, e.g., by checking the order of task elements
    // This part is hypothetical as the scenario does not provide details on how to verify sorting
    const tasks = await page.locator('.task-item').allTextContents();
    const sortedTasks = [...tasks].sort(); // Assuming tasks are strings that can be sorted lexicographically
    expect(tasks).toEqual(sortedTasks);
  });
});