import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify sidebar navigation menu links', async ({ page }) => {
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

    // Verify sidebar navigation menu links
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