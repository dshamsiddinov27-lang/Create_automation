import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify all UI elements on the login page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('login-page')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('logo-text')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('logo-text')).toContainText('TaskFlow');

    await expect(page.getByTestId('login-title')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('login-title')).toContainText('Welcome back');

    await expect(page.getByTestId('login-email-input')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('login-password-input')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('password-toggle-btn')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('remember-me-checkbox')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('forgot-password-link')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('login-submit-btn')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('signup-link')).toBeVisible({ timeout: 15000 });
  });
});