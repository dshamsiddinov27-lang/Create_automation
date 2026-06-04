import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Navigate to the registration page', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const loginButton = page.getByTestId('header-login-btn');
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await loginButton.click();
    await page.waitForLoadState('domcontentloaded');

    const registerLink = page.getByTestId('register-link')
      .or(page.getByRole('link', { name: /register/i }));
    await expect(registerLink).toBeVisible({ timeout: 10000 });
    await registerLink.click();
    await page.waitForLoadState('domcontentloaded');

    const registerForm = page.getByTestId('register-form');
    await expect(registerForm).toBeVisible({ timeout: 10000 });
  });
});