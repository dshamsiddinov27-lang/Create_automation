import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify statistics cards display correct structure', async ({ page }) => {
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

    await expect(page.getByTestId('stat-card-total')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-total-label')).toHaveText('Total Tasks');

    await expect(page.getByTestId('stat-card-todo')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-todo-label')).toHaveText('To Do');

    await expect(page.getByTestId('stat-card-inprogress')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-inprogress-label')).toHaveText('In Progress');

    await expect(page.getByTestId('stat-card-done')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('stat-done-label')).toHaveText('Completed');
  });
});