import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create team visible task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a button or option to select team visibility
    await page.getByRole('button', { name: /team visibility/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a confirmation message or indicator for saved visibility
    await expect(page.getByText('Visibility saved')).toBeVisible();
  });
});