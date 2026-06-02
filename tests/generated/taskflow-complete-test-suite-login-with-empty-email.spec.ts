import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Login with empty email', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there's a login button to proceed without entering an email
    await page.getByRole('button', { name: /login|sign in/i }).click();
    await page.waitForLoadState('networkidle');

    // Check for email validation message
    await expect(page.getByText('Email validation should appear')).toBeVisible();
  });
});