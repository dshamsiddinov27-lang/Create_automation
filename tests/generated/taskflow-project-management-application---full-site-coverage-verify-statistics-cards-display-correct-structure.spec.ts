import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify statistics cards display correct structure', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('stat-card-total')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-total-label')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-total-label')).toContainText('Total Tasks');

    await expect(page.getByTestId('stat-card-todo')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-todo-label')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-todo-label')).toContainText('To Do');

    await expect(page.getByTestId('stat-card-inprogress')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-inprogress-label')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-inprogress-label')).toContainText('In Progress');

    await expect(page.getByTestId('stat-card-done')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-done-label')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-done-label')).toContainText('Completed');
  });
});