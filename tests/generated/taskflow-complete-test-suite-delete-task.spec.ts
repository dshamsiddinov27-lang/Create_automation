import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Delete task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a button or link to delete a task
    await page.getByRole('button', { name: /delete task/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a text or element that indicates the task is removed
    await expect(page.getByText('Task removed')).toBeVisible();
  });
});