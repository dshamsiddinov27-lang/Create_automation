import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify editing an existing task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required, add login steps here if necessary
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('task-edit-btn-2')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-edit-btn-2').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('task-modal-title')).toContainText('Edit Task');

    await expect(page.getByTestId('task-title-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-title-input').fill('Updated Title - Fix Bugs');

    await expect(page.getByTestId('task-priority-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-priority-select').selectOption('high');

    await expect(page.getByTestId('task-save-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-save-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).not.toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
  });
});