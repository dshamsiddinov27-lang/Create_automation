import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Filter tasks by status', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /status filter/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Filtered Tasks')).toBeVisible();
  });
});