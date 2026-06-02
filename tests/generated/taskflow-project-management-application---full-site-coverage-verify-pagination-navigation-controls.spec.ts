import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify pagination navigation controls', async ({ page }) => {
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

    await expect(page.getByTestId('pagination-next-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-next-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('pagination-page-2')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('pagination-prev-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-prev-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('pagination-page-1')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('pagination-last-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-last-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('pagination-first-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('pagination-first-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });
  });
});