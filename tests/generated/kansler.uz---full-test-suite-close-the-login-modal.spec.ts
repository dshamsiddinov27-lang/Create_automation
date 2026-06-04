import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Close the login modal', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const loginButton = page.getByTestId('header-login-btn');
    await expect(loginButton).toBeVisible({ timeout: 10000 });
    await loginButton.click();

    const loginModal = page.getByTestId('login-modal');
    await expect(loginModal).toBeVisible({ timeout: 10000 });

    const closeButton = page.getByTestId('modal-close-btn');
    await expect(closeButton).toBeVisible({ timeout: 10000 });
    await closeButton.click();
    await page.waitForLoadState('domcontentloaded');

    await expect(loginModal).not.toBeVisible({ timeout: 10000 });
  });
});