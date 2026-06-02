import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Confirm task deletion', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /confirm deletion/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Success message')).toBeVisible();
  });
});