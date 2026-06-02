import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify Add Task modal UI and validation', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required and credentials are provided in the scenario context
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('add-task-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('add-task-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('task-modal-title')).toHaveText('Add New Task');

    await expect(page.getByTestId('task-save-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-save-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('title-error-msg')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('task-cancel-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-cancel-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).not.toBeVisible({ timeout: 15000 });
  });
});