import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Navigate to Reports page', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('link', { name: 'Reports' }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Reports')).toBeVisible();
  });
});