import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Sort courses by price', async ({ page }) => {
    await page.goto('/courses');
    await page.waitForLoadState('domcontentloaded');

    const sortDropdown = page.locator('[data-testid="sort-select"]');
    await expect(sortDropdown).toBeVisible({ timeout: 20000 });
    await sortDropdown.click();

    const priceLowToHighOption = page.getByRole('option', { name: /Price: Low to High/i });
    await expect(priceLowToHighOption).toBeVisible({ timeout: 10000 });
    await priceLowToHighOption.click();
    await page.waitForLoadState('domcontentloaded');

    // Verify courses are displayed in ascending price order
    const coursePrices = await page.locator('.course-price').evaluateAll(elements => 
      elements.map(el => parseFloat(el.textContent.replace(/[^0-9.]/g, '')))
    );
    for (let i = 0; i < coursePrices.length - 1; i++) {
      expect(coursePrices[i]).toBeLessThanOrEqual(coursePrices[i + 1]);
    }
  });
});