import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const emailInput = page.getByRole('textbox').or(page.getByPlaceholder('Email'));
    await expect(emailInput.first()).toBeVisible();
    await emailInput.first().click();
    await emailInput.first().fill('user@example.com'); // assuming a valid email for the test

    const passwordInput = page.getByRole('textbox').or(page.getByPlaceholder('Password'));
    await expect(passwordInput.first()).toBeVisible();
    await passwordInput.first().click();
    await passwordInput.first().fill('password123'); // assuming a valid password for the test

    await page.getByRole('button', { name: /login|sign in/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Dashboard')).toBeVisible();
  });
});