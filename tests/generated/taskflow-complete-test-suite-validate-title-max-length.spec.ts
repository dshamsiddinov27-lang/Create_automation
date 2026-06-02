import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Validate title max length', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const titleInput = page.getByRole('textbox');
    await expect(titleInput).toBeVisible();
    await titleInput.fill('This is a very long title that exceeds the maximum allowed length for the title field in the TaskFlow application');

    // Assuming the validation message appears as a text on the page
    await expect(page.getByText('Validation message text')).toBeVisible();
  });
});