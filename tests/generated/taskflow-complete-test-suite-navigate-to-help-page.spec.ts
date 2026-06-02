import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Navigate to Help page', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('link', { name: 'Help' }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Help')).toBeVisible();
  });
});