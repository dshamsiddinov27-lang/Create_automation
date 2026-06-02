import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify user can login successfully', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-email-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-email-input').fill('admin@taskflow.com');

    await expect(page.getByTestId('login-password-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-password-input').fill('password123');

    await expect(page.getByTestId('remember-me-checkbox')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('remember-me-checkbox').check();

    await expect(page.getByTestId('login-submit-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-submit-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('dashboard-page')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('page-heading')).toHaveText(/Task Dashboard/);
  });
});