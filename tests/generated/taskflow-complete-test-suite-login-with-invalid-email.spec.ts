import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Login with invalid email', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const emailInput = page.getByRole('textbox');
    await expect(emailInput).toBeVisible();
    await emailInput.click();
    await emailInput.fill('invalid-email');

    await page.getByRole('button', { name: /login|sign in/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Login error')).toBeVisible();
  });
});