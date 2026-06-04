import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - attempt to enroll in a course (requires auth)', async ({ page }) => {
    // Given the user is not logged in (guest)
    // And the user is on "https://kansler-roan.vercel.app/courses/1"
    await page.goto('https://kansler-roan.vercel.app/courses/1');
    await page.waitForLoadState('domcontentloaded');

    // When the user clicks "[data-testid='course-enroll-btn']"
    const enrollButton = page.getByTestId('course-enroll-btn');
    await expect(enrollButton).toBeVisible({ timeout: 10000 });
    await enrollButton.click();
    await page.waitForLoadState('domcontentloaded');

    // Then "[data-testid='login-modal']" or the login page is opened
    const loginModal = page.getByTestId('login-modal');
    const loginPage = page.getByRole('heading', { name: /login|sign in|kirish/i });
    await expect(loginModal.or(loginPage)).toBeVisible({ timeout: 10000 });
  });
});