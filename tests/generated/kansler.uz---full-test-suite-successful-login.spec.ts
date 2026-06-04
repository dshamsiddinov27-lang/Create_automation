import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Successful login', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const loginButton = page.getByTestId('header-login-btn');
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await loginButton.click();
    await page.waitForLoadState('domcontentloaded');

    const loginModal = page.getByTestId('login-modal')
      .or(page.locator('form'));
    await expect(loginModal.first()).toBeVisible({ timeout: 10000 });

    const phoneInput = page.getByTestId('phone-input')
      .or(page.getByPlaceholder(/phone|telefon|raqam|+998/i))
      .or(page.locator('input[type="tel"]'))
      .or(page.getByRole('textbox').first());
    await expect(phoneInput.first()).toBeVisible({ timeout: 15000 });
    await phoneInput.first().fill('998111111');

    const passwordInput = page.getByTestId('password-input')
      .or(page.getByPlaceholder(/password|parol/i))
      .or(page.locator('input[type="password"]'));
    await expect(passwordInput.first()).toBeVisible({ timeout: 10000 });
    await passwordInput.first().fill('Azizbek5600@');

    const submitButton = page.getByTestId('login-submit-btn')
      .or(page.locator('button[type="submit"]'));
    await expect(submitButton.first()).toBeVisible({ timeout: 10000 });
    await submitButton.first().click();
    await page.waitForLoadState('domcontentloaded');

    const userAvatar = page.getByTestId('user-avatar')
      .or(page.getByTestId('user-menu'));
    await expect(userAvatar.first()).toBeVisible({ timeout: 10000 });
  });
});