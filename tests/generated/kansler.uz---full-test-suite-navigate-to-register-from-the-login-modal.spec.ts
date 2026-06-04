import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Navigate to register from the login modal', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app');
    await page.waitForLoadState('domcontentloaded');

    // Simulate clicking like to open the login modal
    const likeButton = page.getByRole('button', { name: /like/i })
      .or(page.getByTestId('like-button'))
      .first();
    await expect(likeButton).toBeVisible({ timeout: 10000 });
    await likeButton.click();
    await page.waitForLoadState('domcontentloaded');

    // Click on the register button or link in the modal
    const registerButton = page.getByTestId('modal-register-btn')
      .or(page.getByRole('link', { name: /register/i }))
      .first();
    await expect(registerButton).toBeVisible({ timeout: 10000 });
    await registerButton.click();
    await page.waitForLoadState('domcontentloaded');

    // Verify that the registration page is opened
    const registrationHeader = page.getByText(/registration/i);
    await expect(registrationHeader).toBeVisible({ timeout: 10000 });
  });
});