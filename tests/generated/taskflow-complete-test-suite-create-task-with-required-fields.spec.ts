import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create task with required fields', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a button or link to create a task
    await page.getByRole('button', { name: /create task/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming a success toast appears with specific text
    await expect(page.getByText('Success')).toBeVisible();
  });
});