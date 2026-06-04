import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Banner CTA button works', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/home');
    await page.waitForLoadState('domcontentloaded');

    const ctaButton = page.locator('[data-testid="banner-cta-btn"]');
    await expect(ctaButton).toBeVisible({ timeout: 10000 });
    await ctaButton.click();
    await page.waitForLoadState('domcontentloaded');

    // Add assertion to verify the relevant page is opened
    // Example: await expect(page).toHaveURL('https://kansler-roan.vercel.app/expected-page');
  });
});