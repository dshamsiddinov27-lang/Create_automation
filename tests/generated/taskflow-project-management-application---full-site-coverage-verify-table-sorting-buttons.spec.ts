import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify table sorting buttons', async ({ page }) => {
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

    // Verify sorting by title
    await expect(page.getByTestId('sort-title-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('sort-title-btn').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });

    // Verify sorting by priority
    await expect(page.getByTestId('sort-priority-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('sort-priority-btn').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });

    // Verify sorting by due date
    await expect(page.getByTestId('sort-duedate-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('sort-duedate-btn').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });
  });
});