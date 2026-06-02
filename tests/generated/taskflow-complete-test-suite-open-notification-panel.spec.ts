import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Open notification panel', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /notification/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Notification Panel')).toBeVisible();
  });
});