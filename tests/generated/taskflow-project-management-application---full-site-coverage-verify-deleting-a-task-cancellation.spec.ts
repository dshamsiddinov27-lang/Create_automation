import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify deleting a task cancellation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('task-delete-btn-3').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('confirm-modal')).toBeVisible();
    await expect(page.getByTestId('confirm-modal-title')).toContainText('Delete Task');

    await page.getByTestId('confirm-cancel-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('confirm-modal')).not.toBeVisible();
    await expect(page.getByTestId('task-row-3')).toBeVisible();
  });
});