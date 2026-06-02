import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Toggle password visibility', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a password input and a visibility toggle button
    const passwordInput = page.getByRole('textbox', { name: /password/i });
    await expect(passwordInput).toBeVisible();

    const visibilityToggleButton = page.getByRole('button', { name: /visibility/i });
    await visibilityToggleButton.click();

    // Assuming the password input type changes to text when visible
    await expect(passwordInput).toHaveAttribute('type', 'text');
  });
});