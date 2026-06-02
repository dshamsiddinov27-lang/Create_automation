import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify pagination page size selection', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const phoneInput = page.locator('input[type="tel"]').or(page.getByRole('textbox')).or(page.getByPlaceholder('+998'));
    await expect(phoneInput.first()).toBeVisible({ timeout: 15000 });
    await phoneInput.first().click();
    await phoneInput.first().fill('883397766');

    await page.getByRole('button', { name: /продолжить|continue|davom/i }).click();
    await page.waitForLoadState('networkidle');

    const otpInput = page.locator('input[type="tel"]').or(page.locator('input[type="number"]')).or(page.getByRole('textbox'));
    await expect(otpInput.first()).toBeVisible({ timeout: 15000 });
    await otpInput.first().fill('1405');

    await page.getByRole('button', { name: /подтвердить|confirm|tasdiqlash/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('page-size-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('page-size-select').click();
    await page.waitForLoadState('networkidle');

    const option25 = page.getByText('25').or(page.getByRole('option', { name: '25' }));
    await expect(option25.first()).toBeVisible({ timeout: 15000 });
    await option25.first().click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-row-15')).toBeVisible({ timeout: 15000 });
  });
});