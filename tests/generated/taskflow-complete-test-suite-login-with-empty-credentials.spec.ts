import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Login with empty credentials', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /submit|login|sign in/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Validation messages should appear')).toBeVisible();
  });
});