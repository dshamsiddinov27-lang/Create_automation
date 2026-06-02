import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify form validation and invalid credentials error on login', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-submit-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-submit-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('email-validation-msg')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('password-validation-msg')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('login-email-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-email-input').fill('wrong@email.com');

    await expect(page.getByTestId('login-password-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-password-input').fill('wrongpass');

    await expect(page.getByTestId('login-submit-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-submit-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('login-error-alert')).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId('login-error-message')).toContainText('Invalid credentials');
  });
});