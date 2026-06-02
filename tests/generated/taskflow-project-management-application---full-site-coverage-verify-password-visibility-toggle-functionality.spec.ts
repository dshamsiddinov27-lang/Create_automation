import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify password visibility toggle functionality', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const passwordInput = page.getByTestId('login-password-input');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('secret123');

    const toggleButton = page.getByTestId('password-toggle-btn');
    await expect(toggleButton).toBeVisible();
    await toggleButton.click();
    await page.waitForLoadState('networkidle');

    const toggleIcon = page.getByTestId('toggle-icon');
    await expect(toggleIcon).toBeVisible();
  });
});