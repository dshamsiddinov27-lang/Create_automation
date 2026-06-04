import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Login with only phone number filled', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const loginButton = page.getByTestId('header-login-btn');
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await loginButton.click();
    await page.waitForLoadState('domcontentloaded');

    const phoneInput = page.getByTestId('phone-input')
      .or(page.getByPlaceholder(/phone|telefon|raqam|+998/i))
      .or(page.locator('input[type="tel"]'))
      .or(page.getByRole('textbox').first());
    await expect(phoneInput.first()).toBeVisible({ timeout: 15000 });
    await phoneInput.first().click();
    await phoneInput.first().fill('998111111');

    const submitButton = page.getByTestId('login-submit-btn')
      .or(page.locator('button[type="submit"]'));
    await expect(submitButton.first()).toBeVisible({ timeout: 10000 });
    await submitButton.first().click();
    await page.waitForLoadState('domcontentloaded');

    const passwordError = page.getByTestId('password-error');
    await expect(passwordError).toBeVisible({ timeout: 10000 });
  });
});