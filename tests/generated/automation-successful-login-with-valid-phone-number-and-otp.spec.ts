import { test, expect } from '@playwright/test';

test.describe('Automation', () => {
  test('Successful login with valid phone number and OTP', async ({ page }) => {
    await page.goto('https://ice-city.uz/auth');
    await page.waitForLoadState('domcontentloaded');

    const phoneInput = page.locator('input[type="tel"]').or(page.getByRole('textbox')).or(page.getByPlaceholder('+998'));
    await expect(phoneInput.first()).toBeVisible();
    await phoneInput.first().click();
    await phoneInput.first().fill('p1');

    await page.getByRole('button', { name: 'p1' }).click();
    await page.waitForLoadState('networkidle');

    const otpInput = page.locator('input[type="tel"]').or(page.locator('input[type="number"]')).or(page.getByRole('textbox'));
    await expect(otpInput.first()).toBeVisible();
    await otpInput.first().fill('p1');

    await page.getByRole('button', { name: 'p1' }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Main page')).toBeVisible();
  });
});