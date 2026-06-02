import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create task with assignee', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a button or link to select an assignee
    await page.getByRole('button', { name: /select assignee/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a confirmation or indication that the task is assigned
    await expect(page.getByText('Task assigned')).toBeVisible();
  });
});