import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Clear all filters', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /clear filters/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a way to verify that filters are reset, like checking a default state or absence of filter tags
    await expect(page.getByText('No filters applied')).toBeVisible();
  });
});