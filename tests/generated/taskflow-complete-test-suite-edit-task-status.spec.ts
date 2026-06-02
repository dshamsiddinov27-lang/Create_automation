import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Edit task status', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a button or link to change the task status
    await page.getByRole('button', { name: /change status/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a confirmation or some indication that the task status has been updated
    await expect(page.getByText('Task updated')).toBeVisible();
  });
});