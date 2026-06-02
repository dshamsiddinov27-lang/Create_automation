import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Edit task assignee', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a way to change the assignee, represented by a button or link
    await page.getByRole('button', { name: /change assignee/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a confirmation or indication that the task has been updated
    await expect(page.getByText('Task updated')).toBeVisible();
  });
});