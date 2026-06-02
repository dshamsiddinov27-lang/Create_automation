import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Sort tasks by priority', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /priority sorting/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a way to verify tasks are sorted, e.g., by checking the order of task elements
    // This step is a placeholder and should be replaced with actual verification logic
    await expect(page.getByText('Tasks sorted by priority')).toBeVisible();
  });
});