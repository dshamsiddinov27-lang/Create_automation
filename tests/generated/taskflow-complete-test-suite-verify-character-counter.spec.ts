import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Verify character counter', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const descriptionInput = page.getByRole('textbox');
    await expect(descriptionInput).toBeVisible();
    await descriptionInput.click();
    await descriptionInput.fill('Sample description text');

    const counter = page.getByText('Counter: 21'); // Assuming the counter shows "Counter: 21" after typing
    await expect(counter).toBeVisible();
  });
});