import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Sort tasks by due date', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /due date sorting/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a visible indication that tasks are sorted, e.g., a sorted icon or sorted order
    await expect(page.getByText('Tasks sorted by due date')).toBeVisible();
  });
});