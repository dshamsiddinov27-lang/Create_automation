import { test, expect } from '@playwright/test';

test.describe('Automation', () => {
  test('Successful login with valid phone number and OTP', async ({ page }) => {
    await page.goto('https://ice-city.uz/auth');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('textbox')).toBeVisible();
    await page.getByRole('textbox').fill('883397766');

    await expect(page.getByRole('button', { name: 'Продолжить' })).toBeVisible();
    await page.getByRole('button', { name: 'Продолжить' }).click();

    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('textbox')).toBeVisible();
    await page.getByRole('textbox').fill('1405');

    await page.getByRole('button', { name: 'Продолжить' }).click();
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL!�/main/);
  });
});
