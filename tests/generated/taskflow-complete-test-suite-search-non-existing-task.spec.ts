import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Search non existing task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.getByRole('textbox');
    await expect(searchInput).toBeVisible();
    await searchInput.click();
    await searchInput.fill('unknown task');

    await page.getByRole('button', { name: /search|поиск/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Empty result')).toBeVisible();
  });
});