import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify table sorting buttons', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('sort-title-btn').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByTestId('task-table')).toBeVisible();

    await page.getByTestId('sort-priority-btn').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByTestId('task-table')).toBeVisible();

    await page.getByTestId('sort-duedate-btn').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByTestId('task-table')).toBeVisible();
  });
});