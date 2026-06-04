import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - attempt to write a comment on news', async ({ page }) => {
    // Given the user is not logged in (guest)
    // And the user is on "https://kansler-roan.vercel.app/news/1"
    await page.goto('https://kansler-roan.vercel.app/news/1');
    await page.waitForLoadState('domcontentloaded');

    // When the user clicks "[data-testid='comment-input']"
    const commentInput = page.getByTestId('comment-input');
    await expect(commentInput).toBeVisible({ timeout: 20000 });
    await commentInput.click();

    // Then "[data-testid='login-modal']" opens
    const loginModal = page.getByTestId('login-modal');
    await expect(loginModal).toBeVisible({ timeout: 20000 });
  });
});