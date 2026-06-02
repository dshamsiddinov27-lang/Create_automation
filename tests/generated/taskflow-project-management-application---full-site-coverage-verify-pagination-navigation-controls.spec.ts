import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify pagination navigation controls', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Login if required
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    // Click next pagination button
    await expect(page.getByTestId('pagination-next-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-next-btn').click();
    await page.waitForLoadState('networkidle');

    // Verify page 2 is visible
    await expect(page.getByTestId('pagination-page-2')).toBeVisible({ timeout: 15000 });

    // Click previous pagination button
    await expect(page.getByTestId('pagination-prev-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-prev-btn').click();
    await page.waitForLoadState('networkidle');

    // Verify page 1 is visible
    await expect(page.getByTestId('pagination-page-1')).toBeVisible({ timeout: 15000 });

    // Click last pagination button
    await expect(page.getByTestId('pagination-last-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-last-btn').click();
    await page.waitForLoadState('networkidle');

    // Verify task table is visible
    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });

    // Click first pagination button
    await expect(page.getByTestId('pagination-first-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-first-btn').click();
    await page.waitForLoadState('networkidle');

    // Verify task table is visible
    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });
  });
});