import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify adding a complex task with all fields and tags', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('add-task-btn').click();
    await page.waitForLoadState('networkidle');

    await page.getByTestId('task-title-input').fill('Develop Database Schema');

    await page.getByTestId('task-description-textarea').fill('Create PostgreSQL tables for user management');

    await page.getByTestId('task-status-select').selectOption('todo');

    await page.getByTestId('task-priority-select').selectOption('critical');

    await page.getByTestId('task-start-date-input').fill('2026-06-05');

    await page.getByTestId('task-due-date-input').fill('2026-06-15');

    await page.getByTestId('task-assignee-select').selectOption('john');

    await page.getByTestId('tag-text-input').fill('database');

    await page.getByTestId('add-tag-btn').click();

    await page.getByTestId('tag-text-input').fill('backend');

    await page.getByTestId('add-tag-btn').click();

    await page.getByTestId('notify-assignee-checkbox').check();

    await page.getByTestId('mark-urgent-checkbox').check();

    await page.getByTestId('billable-checkbox').check();

    await page.getByTestId('visibility-team-radio').check();

    await page.getByTestId('task-save-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-modal')).not.toBeVisible();

    await expect(page.getByTestId('toast-success')).toBeVisible();

    await expect(page.getByTestId('toast-message')).toContainText('Task added successfully');
  });
});