import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify form validation and invalid credentials error on login', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('login-submit-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('email-validation-msg')).toBeVisible();
    await expect(page.getByTestId('password-validation-msg')).toBeVisible();

    await page.getByTestId('login-email-input').fill('wrong@email.com');
    await page.getByTestId('login-password-input').fill('wrongpass');

    await page.getByTestId('login-submit-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-error-alert')).toBeVisible();
    await expect(page.getByTestId('login-error-message')).toContainText('Invalid credentials');
  });
});