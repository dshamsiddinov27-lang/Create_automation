import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Navigate to Tasks page', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('link', { name: 'Tasks' }).click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Tasks')).toBeVisible();
  });
});