import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify adding a complex task with all fields and tags', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required, add login steps here
    const isLoginPage = await page.getByRole('button', { name: /sign in|login/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    await expect(page.getByTestId('add-task-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('add-task-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-title-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-title-input').fill('Develop Database Schema');

    await expect(page.getByTestId('task-description-textarea')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-description-textarea').fill('Create PostgreSQL tables for user management');

    await expect(page.getByTestId('task-status-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-status-select').selectOption('todo');

    await expect(page.getByTestId('task-priority-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-priority-select').selectOption('critical');

    await expect(page.getByTestId('task-start-date-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-start-date-input').fill('2026-06-05');

    await expect(page.getByTestId('task-due-date-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-due-date-input').fill('2026-06-15');

    await expect(page.getByTestId('task-assignee-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-assignee-select').selectOption('john');

    await expect(page.getByTestId('tag-text-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('tag-text-input').fill('database');
    await expect(page.getByTestId('add-tag-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('add-tag-btn').click();

    await expect(page.getByTestId('tag-text-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('tag-text-input').fill('backend');
    await expect(page.getByTestId('add-tag-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('add-tag-btn').click();

    await expect(page.getByTestId('notify-assignee-checkbox')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('notify-assignee-checkbox').check();

    await expect(page.getByTestId('mark-urgent-checkbox')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('mark-urgent-checkbox').check();

    await expect(page.getByTestId('billable-checkbox')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('billable-checkbox').check();

    await expect(page.getByTestId('visibility-team-radio')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('visibility-team-radio').check();

    await expect(page.getByTestId('task-save-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-save-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).not.toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('toast-success')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('toast-message')).toContainText('Task added successfully');
  });
});