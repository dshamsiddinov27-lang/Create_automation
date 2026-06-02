import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify bulk delete action', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const phoneInput = page.locator('input[type="tel"]').or(page.getByRole('textbox')).or(page.getByPlaceholder('+998'));
    await expect(phoneInput.first()).toBeVisible();
    await phoneInput.first().click();
    await phoneInput.first().fill('883397766');

    await page.getByRole('button', { name: /продолжить|continue|davom/i }).click();
    await page.waitForLoadState('networkidle');

    const otpInput = page.locator('input[type="tel"]').or(page.locator('input[type="number"]')).or(page.getByRole('textbox'));
    await expect(otpInput.first()).toBeVisible();
    await otpInput.first().fill('1405');

    await page.getByRole('button', { name: /подтвердить|confirm|tasdiqlash/i }).click();
    await page.waitForLoadState('networkidle');

    await page.getByTestId('task-checkbox-1').check();
    await page.getByTestId('task-checkbox-2').check();

    await page.getByTestId('bulk-delete-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('toast-success')).toBeVisible();
  });
});