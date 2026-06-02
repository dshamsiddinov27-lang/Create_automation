import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify search and filter inputs work properly', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Login step if required
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    // Fill search input
    await expect(page.getByTestId('task-search-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-search-input').fill('backend api');

    // Select status filter
    await expect(page.getByTestId('status-filter-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('status-filter-select').selectOption({ label: 'in-progress' });

    // Select priority filter
    await expect(page.getByTestId('priority-filter-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('priority-filter-select').selectOption({ label: 'critical' });

    // Fill date from input
    await expect(page.getByTestId('date-from-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('date-from-input').fill('2026-06-01');

    // Fill date to input
    await expect(page.getByTestId('date-to-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('date-to-input').fill('2026-06-30');

    // Verify task table is visible
    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });

    // Click clear filters button
    await expect(page.getByTestId('clear-filters-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('clear-filters-btn').click();
    await page.waitForLoadState('networkidle');

    // Verify search input is empty
    await expect(page.getByTestId('task-search-input')).toHaveValue('');
  });
});