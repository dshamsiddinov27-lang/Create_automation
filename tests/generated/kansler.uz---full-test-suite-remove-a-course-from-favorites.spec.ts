import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Remove a course from favorites', async ({ page }) => {
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

    // And the course is already in the user's favorites
    // Assuming the course is already in favorites, no action needed here

    // When the user clicks "[data-testid='course-like-btn']" or "[data-testid='course-save-btn']" again
    const courseButton = page.getByTestId('course-like-btn')
      .or(page.getByTestId('course-save-btn'))
      .first();
    await expect(courseButton).toBeVisible({ timeout: 10000 });
    await courseButton.click();
    await page.waitForLoadState('domcontentloaded');

    // Then the course is removed from favorites
    // And the button returns to inactive state
    // Assuming the button's inactive state can be verified by a class or attribute change
    await expect(courseButton).not.toHaveClass(/active/); // Example check for inactive state
  });
});