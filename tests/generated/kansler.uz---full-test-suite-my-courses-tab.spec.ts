import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('My Courses tab', async ({ page }) => {
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
    // Assuming the user is redirected to the profile page after login

    // When the user clicks "[data-testid='my-courses-tab']" or the "My Courses" tab
    const myCoursesTab = page.getByTestId('my-courses-tab')
      .or(page.getByRole('tab', { name: /my courses/i }));
    await expect(myCoursesTab.first()).toBeVisible({ timeout: 10000 });
    await myCoursesTab.first().click();
    await page.waitForLoadState('domcontentloaded');

    // Then "[data-testid='enrolled-courses-list']" is visible
    const enrolledCoursesList = page.getByTestId('enrolled-courses-list');
    await expect(enrolledCoursesList.first()).toBeVisible({ timeout: 10000 });

    // And the list of enrolled courses is shown
    // Assuming the visibility of the list implies it is shown
  });
});