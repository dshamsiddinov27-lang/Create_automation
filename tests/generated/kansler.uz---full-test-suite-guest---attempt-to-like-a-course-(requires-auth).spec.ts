import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - attempt to like a course (requires auth)', async ({ page }) => {
    // Given the user is not logged in (guest)
    // And the user is on "https://kansler-roan.vercel.app/courses/1"
    await page.goto('https://kansler-roan.vercel.app/courses/1');
    await page.waitForLoadState('domcontentloaded');

    // When the user clicks "[data-testid='course-like-btn']"
    const likeButton = page.getByTestId('course-like-btn');
    await expect(likeButton).toBeVisible({ timeout: 10000 });
    await likeButton.click();
    await page.waitForLoadState('domcontentloaded');

    // Then "[data-testid='login-modal']" or the login page is opened
    const loginModal = page.getByTestId('login-modal')
      .or(page.locator('text=Login required').first());
    await expect(loginModal).toBeVisible({ timeout: 10000 });

    // And "Login required" or similar message is shown
    const loginMessage = page.getByText(/login required/i)
      .or(page.getByText(/please log in to continue/i));
    await expect(loginMessage).toBeVisible({ timeout: 10000 });
  });
});