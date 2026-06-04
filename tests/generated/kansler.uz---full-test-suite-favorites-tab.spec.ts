import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Favorites tab', async ({ page }) => {
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
    // Assuming the profile page is the landing page after login

    // When the user clicks "[data-testid='favorites-tab']" or the "Favorites" tab
    const favoritesTab = page.getByTestId('favorites-tab')
      .or(page.getByRole('tab', { name: /favorites/i }));
    await expect(favoritesTab).toBeVisible({ timeout: 10000 });
    await favoritesTab.click();
    await page.waitForLoadState('domcontentloaded');

    // Then "[data-testid='favorites-list']" is visible
    const favoritesList = page.getByTestId('favorites-list');
    await expect(favoritesList).toBeVisible({ timeout: 10000 });

    // And liked courses/articles are shown
    // Assuming liked courses/articles are part of the favorites list
    const likedItems = favoritesList.locator('.liked-item'); // Adjust selector as needed
    await expect(likedItems.first()).toBeVisible({ timeout: 10000 });
  });
});