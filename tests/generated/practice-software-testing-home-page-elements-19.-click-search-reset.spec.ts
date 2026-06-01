import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('19. Click Search Reset', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.locator('[data-test="search-query"]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('Hammer');

    await page.locator('[data-test="search-reset"]').click();
    await page.waitForLoadState('networkidle');

    await expect(searchInput).toHaveValue('');
  });
});