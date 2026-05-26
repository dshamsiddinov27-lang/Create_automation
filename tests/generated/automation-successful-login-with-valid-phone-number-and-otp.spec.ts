import { test, expect } from '@playwright/test';

test.describe('Automation', () => {
  test('Successful login with valid phone number and OTP', async ({ page }) => {
    await page.goto('https://ice-city.uz/auth');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('textbox')).toBeVisible();
    await page.getByRole('textbox').fill('+998901234567');

    await expect(page.getByRole('button', { name: 'Продолжить' })).toBeVisible();
    await page.getByRole('button', { name: 'Продолжить' }).click();

    await expect(page.getByRole('heading', { name: 'Код' })).toBeVisible();
    await expect(page.getByRole('textbox')).toHaveValue('____');

    await page.getByRole('textbox').fill('1234');
    await page.getByRole('button', { name: 'Продолжить' }).click();

    await expect(page).toHaveURL(/main/);
  });
});