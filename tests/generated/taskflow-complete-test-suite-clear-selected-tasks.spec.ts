import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Clear selected tasks', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /clear selection/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('No tasks selected')).toBeVisible();
  });
});