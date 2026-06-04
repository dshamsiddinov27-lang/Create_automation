import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Successful logout', async ({ page }) => {
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

    // When the user clicks "[data-testid='user-avatar']" or "[data-testid='user-menu-btn']"
    const userMenuBtn = page.getByTestId('user-avatar')
      .or(page.getByTestId('user-menu-btn'));
    await expect(userMenuBtn).toBeVisible({ timeout: 10000 });
    await userMenuBtn.click();

    // Then "[data-testid='user-dropdown-menu']" opens
    const userDropdownMenu = page.getByTestId('user-dropdown-menu');
    await expect(userDropdownMenu).toBeVisible({ timeout: 10000 });

    // When the user clicks "[data-testid='logout-btn']"
    const logoutBtn = page.getByTestId('logout-btn');
    await expect(logoutBtn).toBeVisible({ timeout: 10000 });
    await logoutBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // Then the user is logged out
    // And "[data-testid='header-login-btn']" is visible again
    const headerLoginBtn = page.getByTestId('header-login-btn');
    await expect(headerLoginBtn).toBeVisible({ timeout: 10000 });

    // And "[data-testid='user-avatar']" is no longer visible
    const userAvatar = page.getByTestId('user-avatar');
    await expect(userAvatar).not.toBeVisible({ timeout: 10000 });
  });
});