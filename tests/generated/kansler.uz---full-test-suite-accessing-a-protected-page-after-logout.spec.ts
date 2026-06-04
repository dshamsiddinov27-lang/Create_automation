import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Accessing a protected page after logout', async ({ page }) => {
    // Given the user is logged in with phone "998111111" and password "Azizbek5600@"
    await page.goto('https://kansler-roan.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const loginInput = page.getByTestId('login-phone-input')
      .or(page.getByTestId('login-email-input'))
      .or(page.getByPlaceholder(/phone|telefon|login|email/i))
      .or(page.locator('input[type="tel"]'))
      .first();
    await expect(loginInput).toBeVisible({ timeout: 15000 });
    await loginInput.fill('998111111');

    const passwordInput = page.getByTestId('login-password-input')
      .or(page.getByPlaceholder(/password|parol/i))
      .or(page.locator('input[type="password"]'))
      .first();
    await expect(passwordInput).toBeVisible({ timeout: 10000 });
    await passwordInput.fill('Azizbek5600@');

    const submitBtn = page.getByRole('button', { name: /kirish|login|sign in|enter/i })
      .or(page.getByTestId('login-submit-button'))
      .or(page.locator('button[type="submit"]'))
      .first();
    await expect(submitBtn).toBeVisible({ timeout: 10000 });
    await submitBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // When the user logs out
    const logoutBtn = page.getByRole('button', { name: /logout|chiqish/i })
      .or(page.getByTestId('logout-button'))
      .or(page.locator('button[type="button"]'))
      .first();
    await expect(logoutBtn).toBeVisible({ timeout: 10000 });
    await logoutBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // And tries to navigate directly to "/profile"
    await page.goto('https://kansler-roan.vercel.app/profile');
    await page.waitForLoadState('domcontentloaded');

    // Then the user is redirected to the login page
    const loginPageIndicator = page.getByRole('button', { name: /kirish|login|sign in|enter/i })
      .or(page.getByTestId('login-submit-button'))
      .or(page.locator('button[type="submit"]'))
      .first();
    await expect(loginPageIndicator).toBeVisible({ timeout: 10000 });
  });
});