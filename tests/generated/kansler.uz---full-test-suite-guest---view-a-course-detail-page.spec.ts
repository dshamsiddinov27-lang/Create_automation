import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Guest - view a course detail page', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app');
    await page.waitForLoadState('domcontentloaded');

    // Given the user is not logged in (guest)
    // No action needed as the user is already a guest by default

    // When the user clicks on a course card
    const courseCard = page.getByRole('link', { name: /course/i }).first();
    await expect(courseCard).toBeVisible({ timeout: 20000 });
    await courseCard.click();
    await page.waitForLoadState('domcontentloaded');

    // Then the course detail page is opened
    const courseDetailHeader = page.getByRole('heading', { name: /course detail/i });
    await expect(courseDetailHeader).toBeVisible({ timeout: 20000 });

    // And the course description is visible
    const courseDescription = page.getByText(/course description/i);
    await expect(courseDescription).toBeVisible({ timeout: 20000 });
  });
});