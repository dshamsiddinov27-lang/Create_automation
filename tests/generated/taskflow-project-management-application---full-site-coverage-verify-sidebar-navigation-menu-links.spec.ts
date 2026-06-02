import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify sidebar navigation menu links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('sidebar-logo-text')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('sidebar-logo-text')).toContainText('TaskFlow');

    await expect(page.getByTestId('nav-dashboard-link')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('nav-tasks-link')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('tasks-badge')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('nav-team-link')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('nav-reports-link')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('nav-settings-link')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('nav-help-link')).toBeVisible({ timeout: 15000 });
  });
});