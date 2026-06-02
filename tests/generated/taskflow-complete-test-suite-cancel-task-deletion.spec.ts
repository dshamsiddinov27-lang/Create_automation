import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Cancel task deletion', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a task visible and a delete button for it
    await page.getByRole('button', { name: /delete/i }).click();
    await page.getByRole('button', { name: /cancel/i }).click();
    await page.waitForLoadState('networkidle');

    // Verify the task is still present
    await expect(page.getByText('Task should remain')).toBeVisible();
  });
});