import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify all UI elements on the login page', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('login-page')).toBeVisible();

    await expect(page.getByTestId('logo-text')).toContainText('TaskFlow');

    await expect(page.getByTestId('login-title')).toContainText('Welcome back');

    await expect(page.getByTestId('login-email-input')).toBeVisible();

    await expect(page.getByTestId('login-password-input')).toBeVisible();

    await expect(page.getByTestId('password-toggle-btn')).toBeVisible();

    await expect(page.getByTestId('remember-me-checkbox')).toBeVisible();

    await expect(page.getByTestId('forgot-password-link')).toBeVisible();

    await expect(page.getByTestId('login-submit-btn')).toBeVisible();

    await expect(page.getByTestId('signup-link')).toBeVisible();
  });
});