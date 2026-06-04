import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Profile edit validation', async ({ page }) => {
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

    // And the user is on the profile page
    await page.goto('https://kansler-roan.vercel.app/profile');
    await page.waitForLoadState('domcontentloaded');

    // When the user clicks "[data-testid='edit-profile-btn']"
    const editProfileBtn = page.getByTestId('edit-profile-btn');
    await expect(editProfileBtn).toBeVisible({ timeout: 10000 });
    await editProfileBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // And enters "<first_name>" into "[data-testid='profile-first-name-input']"
    const firstNameInput = page.getByTestId('profile-first-name-input');
    await expect(firstNameInput).toBeVisible({ timeout: 10000 });
    await firstNameInput.fill('John');

    // And enters "<last_name>" into "[data-testid='profile-last-name-input']"
    const lastNameInput = page.getByTestId('profile-last-name-input');
    await expect(lastNameInput).toBeVisible({ timeout: 10000 });
    await lastNameInput.fill('Doe');

    // And clicks "[data-testid='save-profile-btn']"
    const saveProfileBtn = page.getByTestId('save-profile-btn');
    await expect(saveProfileBtn).toBeVisible({ timeout: 10000 });
    await saveProfileBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // Then "<expected_result>" occurs
    const successMessage = page.getByText(/Profile updated successfully/i);
    await expect(successMessage).toBeVisible({ timeout: 10000 });
  });
});