import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Login with invalid password', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const passwordInput = page.getByRole('textbox');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('invalidpassword');

    await page.getByRole('button', { name: /login|sign in/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Login error')).toBeVisible();
  });
});