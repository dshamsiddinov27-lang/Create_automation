import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - browse the courses list', async ({ page }) => {
    // Given the user is not logged in (guest)
    // No login action needed as the user is a guest

    // When the user navigates to "https://kansler-roan.vercel.app/courses"
    await page.goto('https://kansler-roan.vercel.app/courses');
    await page.waitForLoadState('domcontentloaded');

    // Then the courses list is visible
    const coursesList = page.getByRole('list', { name: /courses/i })
      .or(page.getByTestId('courses-list'))
      .or(page.getByText(/courses/i));
    await expect(coursesList.first()).toBeVisible({ timeout: 20000 });
  });
});