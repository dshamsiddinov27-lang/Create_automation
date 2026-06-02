import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create urgent task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('checkbox', { name: /urgent/i }).check();

    await expect(page.getByRole('checkbox', { name: /urgent/i })).toBeChecked();
  });
});