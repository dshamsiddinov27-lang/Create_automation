import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk action selection and clearing', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('task-checkbox-1').check();
    await page.getByTestId('task-checkbox-2').check();

    await expect(page.getByTestId('bulk-actions-bar')).toBeVisible();
    await expect(page.getByTestId('bulk-selected-count')).toContainText('2 selected');

    await page.getByTestId('bulk-clear-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('bulk-actions-bar')).not.toBeVisible();
  });
});