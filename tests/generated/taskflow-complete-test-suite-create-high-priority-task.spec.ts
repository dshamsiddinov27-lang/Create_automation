import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create high priority task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('button', { name: /high priority/i }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Task should be created')).toBeVisible();
  });
});