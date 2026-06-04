import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Header elements are visible', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const header = page.getByTestId('header');
    await expect(header).toBeVisible({ timeout: 20000 });

    const headerLogo = page.getByTestId('header-logo');
    await expect(headerLogo).toBeVisible({ timeout: 20000 });

    const headerNav = page.getByTestId('header-nav');
    await expect(headerNav).toBeVisible({ timeout: 20000 });

    const headerLoginBtn = page.getByTestId('header-login-btn');
    await expect(headerLoginBtn).toBeVisible({ timeout: 20000 });

    const headerSearchBtnOrInput = page.getByTestId('header-search-btn')
      .or(page.getByRole('textbox', { name: /search/i }));
    await expect(headerSearchBtnOrInput.first()).toBeVisible({ timeout: 20000 });
  });
});