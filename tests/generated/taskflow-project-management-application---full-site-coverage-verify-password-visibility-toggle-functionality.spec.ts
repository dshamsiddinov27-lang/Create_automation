import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify password visibility toggle functionality', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('login-password-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('login-password-input').fill('secret123');

    await expect(page.getByTestId('password-toggle-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('password-toggle-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('toggle-icon')).toBeVisible({ timeout: 15000 });
  });
});