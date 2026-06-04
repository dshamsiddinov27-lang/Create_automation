import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Hero banner is visible', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const heroBanner = page.locator('[data-testid="hero-banner"]')
      .or(page.locator('[data-testid="main-banner"]'));
    await expect(heroBanner.first()).toBeVisible({ timeout: 20000 });
  });
});