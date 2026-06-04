import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Successful registration', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const loginButton = page.getByTestId('header-login-btn');
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await loginButton.click();
    await page.waitForLoadState('domcontentloaded');

    const registerLink = page.getByTestId('register-link');
    await expect(registerLink).toBeVisible({ timeout: 10000 });
    await registerLink.click();
    await page.waitForLoadState('domcontentloaded');

    const firstNameInput = page.getByTestId('first-name-input');
    await expect(firstNameInput).toBeVisible({ timeout: 10000 });
    await firstNameInput.fill('Aziz');

    const lastNameInput = page.getByTestId('last-name-input');
    await expect(lastNameInput).toBeVisible({ timeout: 10000 });
    await lastNameInput.fill('Karimov');

    const phoneInput = page.getByTestId('phone-input');
    await expect(phoneInput).toBeVisible({ timeout: 10000 });
    await phoneInput.fill('998901234567');

    const passwordInput = page.getByTestId('password-input');
    await expect(passwordInput).toBeVisible({ timeout: 10000 });
    await passwordInput.fill('TestUser123@');

    const confirmPasswordInput = page.getByTestId('confirm-password-input');
    await expect(confirmPasswordInput).toBeVisible({ timeout: 10000 });
    await confirmPasswordInput.fill('TestUser123@');

    const registerSubmitButton = page.getByTestId('register-submit-btn');
    await expect(registerSubmitButton).toBeVisible({ timeout: 10000 });
    await registerSubmitButton.click();
    await page.waitForLoadState('domcontentloaded');

    const userAvatar = page.getByTestId('user-avatar');
    await expect(userAvatar).toBeVisible({ timeout: 10000 });
  });
});