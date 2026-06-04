import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Login with empty fields', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const loginButton = page.getByTestId('header-login-btn');
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await loginButton.click();
    await page.waitForLoadState('domcontentloaded');

    const submitButton = page.getByTestId('login-submit-btn');
    await expect(submitButton).toBeVisible({ timeout: 10000 });
    await submitButton.click();
    await page.waitForLoadState('domcontentloaded');

    const phoneError = page.getByTestId('phone-error');
    await expect(phoneError).toBeVisible({ timeout: 10000 });

    const passwordError = page.getByTestId('password-error');
    await expect(passwordError).toBeVisible({ timeout: 10000 });
  });
});