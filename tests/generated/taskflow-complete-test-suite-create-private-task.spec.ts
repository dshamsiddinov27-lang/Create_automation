import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create private task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: 'Private' }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Visibility saved')).toBeVisible();
  });
});