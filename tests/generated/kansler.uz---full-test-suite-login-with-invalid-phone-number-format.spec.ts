import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Login with invalid phone number format', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const loginButton = page.getByTestId('header-login-btn');
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await loginButton.click();
    await page.waitForLoadState('domcontentloaded');

    const phoneInput = page.getByTestId('phone-input');
    await expect(phoneInput).toBeVisible({ timeout: 15000 });
    await phoneInput.fill('12345');

    const passwordInput = page.getByTestId('password-input');
    await expect(passwordInput).toBeVisible({ timeout: 10000 });
    await passwordInput.fill('Azizbek5600@');

    const submitButton = page.getByTestId('login-submit-btn');
    await expect(submitButton).toBeVisible({ timeout: 10000 });
    await submitButton.click();
    await page.waitForLoadState('domcontentloaded');

    const phoneError = page.getByTestId('phone-error');
    await expect(phoneError).toBeVisible({ timeout: 10000 });
  });
});