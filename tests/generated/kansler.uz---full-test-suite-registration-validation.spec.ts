import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Registration validation', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    // Navigate to the register form
    const registerFormLink = page.getByRole('link', { name: /register/i })
      .or(page.getByText(/register/i));
    await expect(registerFormLink).toBeVisible({ timeout: 10000 });
    await registerFormLink.click();
    await page.waitForLoadState('domcontentloaded');

    // Enter first name
    const firstNameInput = page.getByTestId('first-name-input');
    await expect(firstNameInput).toBeVisible({ timeout: 10000 });
    await firstNameInput.fill('<first_name>');

    // Enter last name
    const lastNameInput = page.getByTestId('last-name-input');
    await expect(lastNameInput).toBeVisible({ timeout: 10000 });
    await lastNameInput.fill('<last_name>');

    // Enter phone number
    const phoneInput = page.getByTestId('phone-input');
    await expect(phoneInput).toBeVisible({ timeout: 10000 });
    await phoneInput.fill('<phone>');

    // Enter password
    const passwordInput = page.getByTestId('password-input');
    await expect(passwordInput).toBeVisible({ timeout: 10000 });
    await passwordInput.fill('<password>');

    // Enter confirm password
    const confirmPasswordInput = page.getByTestId('confirm-password-input');
    await expect(confirmPasswordInput).toBeVisible({ timeout: 10000 });
    await confirmPasswordInput.fill('<confirm_password>');

    // Click register button
    const registerSubmitBtn = page.getByTestId('register-submit-btn');
    await expect(registerSubmitBtn).toBeVisible({ timeout: 10000 });
    await registerSubmitBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // Verify expected result
    const expectedResult = page.getByText('<expected_result>');
    await expect(expectedResult).toBeVisible({ timeout: 10000 });
  });
});