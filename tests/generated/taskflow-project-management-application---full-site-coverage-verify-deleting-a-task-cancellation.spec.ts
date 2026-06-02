import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify deleting a task cancellation', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required to access the task page
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('task-delete-btn-3')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-delete-btn-3').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('confirm-modal')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('confirm-modal-title')).toContainText('Delete Task');

    await expect(page.getByTestId('confirm-cancel-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('confirm-cancel-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('confirm-modal')).not.toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('task-row-3')).toBeVisible({ timeout: 15000 });
  });
});