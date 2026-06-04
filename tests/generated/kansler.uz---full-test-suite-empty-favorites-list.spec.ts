import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Empty favorites list', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app');
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

    const favoritesTab = page.getByTestId('favorites-tab');
    await expect(favoritesTab).toBeVisible({ timeout: 10000 });
    await favoritesTab.click();
    await page.waitForLoadState('domcontentloaded');

    const emptyFavoritesMessage = page.getByTestId('empty-favorites-message')
      .or(page.getByText(/Nothing added yet/i));
    await expect(emptyFavoritesMessage).toBeVisible({ timeout: 10000 });
  });
});