import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Registration with an already registered phone number', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    // Navigate to the register form
    const registerFormLink = page.getByRole('link', { name: /register|sign up/i });
    await expect(registerFormLink).toBeVisible({ timeout: 10000 });
    await registerFormLink.click();
    await page.waitForLoadState('domcontentloaded');

    // Enter phone number
    const phoneInput = page.getByTestId('phone-input')
      .or(page.getByPlaceholder(/phone|telefon|raqam/i))
      .or(page.locator('input[type="tel"]'))
      .or(page.getByRole('textbox').first());
    await expect(phoneInput.first()).toBeVisible({ timeout: 15000 });
    await phoneInput.first().click();
    await phoneInput.first().fill('998111111');

    // Enter password
    const passwordInput = page.getByTestId('password-input')
      .or(page.getByPlaceholder(/password|parol/i))
      .or(page.locator('input[type="password"]'));
    await expect(passwordInput.first()).toBeVisible({ timeout: 10000 });
    await passwordInput.first().fill('TestUser123@');

    // Confirm password
    const confirmPasswordInput = page.getByTestId('confirm-password-input')
      .or(page.getByPlaceholder(/confirm password|tasdiqlash parol/i))
      .or(page.locator('input[type="password"]'));
    await expect(confirmPasswordInput.first()).toBeVisible({ timeout: 10000 });
    await confirmPasswordInput.first().fill('TestUser123@');

    // Click register button
    const registerBtn = page.getByTestId('register-submit-btn')
      .or(page.getByRole('button', { name: /register|sign up/i }))
      .or(page.locator('button[type="submit"]'));
    await expect(registerBtn.first()).toBeVisible({ timeout: 10000 });
    await registerBtn.first().click();
    await page.waitForLoadState('domcontentloaded');

    // Verify error message
    const phoneError = page.getByTestId('phone-error')
      .or(page.getByText(/this number is already registered/i));
    await expect(phoneError).toBeVisible({ timeout: 10000 });
    await expect(phoneError).toHaveText('This number is already registered');
  });
});