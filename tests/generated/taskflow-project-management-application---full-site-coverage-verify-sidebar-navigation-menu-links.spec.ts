import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify sidebar navigation menu links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('sidebar-logo-text')).toContainText('TaskFlow');
    await expect(page.getByTestId('nav-dashboard-link')).toBeVisible();
    await expect(page.getByTestId('nav-tasks-link')).toBeVisible();
    await expect(page.getByTestId('tasks-badge')).toBeVisible();
    await expect(page.getByTestId('nav-team-link')).toBeVisible();
    await expect(page.getByTestId('nav-reports-link')).toBeVisible();
    await expect(page.getByTestId('nav-settings-link')).toBeVisible();
    await expect(page.getByTestId('nav-help-link')).toBeVisible();
  });
});