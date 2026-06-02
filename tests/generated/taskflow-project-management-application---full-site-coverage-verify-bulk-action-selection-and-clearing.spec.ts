import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk action selection and clearing', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    // Assuming login is required, add login steps here
    const isLoginPage = await page.getByRole('button', { name: /sign in|login|kirish/i }).isVisible().catch(() => false);
    if (isLoginPage) {
      await page.getByLabel(/username|email/i).fill('YOUR_USERNAME_FROM_SCENARIO');
      await page.getByLabel(/password/i).fill('YOUR_PASSWORD_FROM_SCENARIO');
      await page.getByRole('button', { name: /sign in|login/i }).click();
      await page.waitForLoadState('networkidle');
    }

    // Check the first checkbox
    await expect(page.getByTestId('task-checkbox-1')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-checkbox-1').click();

    // Check the second checkbox
    await expect(page.getByTestId('task-checkbox-2')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-checkbox-2').click();

    // Verify bulk actions bar is visible
    await expect(page.getByTestId('bulk-actions-bar')).toBeVisible({ timeout: 15000 });

    // Verify the bulk selected count
    await expect(page.getByTestId('bulk-selected-count')).toHaveText('2 selected');

    // Click the bulk clear button
    await expect(page.getByTestId('bulk-clear-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('bulk-clear-btn').click();
    await page.waitForLoadState('networkidle');

    // Verify bulk actions bar is not visible
    await expect(page.getByTestId('bulk-actions-bar')).not.toBeVisible({ timeout: 15000 });
  });
});