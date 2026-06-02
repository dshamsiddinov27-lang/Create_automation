import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify search and filter inputs work properly', async ({ page }) => {
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

    await expect(page.getByTestId('task-search-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('task-search-input').fill('backend api');

    await expect(page.getByTestId('status-filter-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('status-filter-select').click();
    await page.getByRole('option', { name: 'in-progress' }).click();

    await expect(page.getByTestId('priority-filter-select')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('priority-filter-select').click();
    await page.getByRole('option', { name: 'critical' }).click();

    await expect(page.getByTestId('date-from-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('date-from-input').fill('2026-06-01');

    await expect(page.getByTestId('date-to-input')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('date-to-input').fill('2026-06-30');

    await expect(page.getByTestId('task-table')).toBeVisible({ timeout: 15000 });

    await expect(page.getByTestId('clear-filters-btn')).toBeVisible({ timeout: 15000 });
    await page.getByTestId('clear-filters-btn').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('task-search-input')).toHaveValue('');
  });
});