import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Validate required title field', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there's a button to save the task
    await page.getByRole('button', { name: /save|сохранить|saqlash/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming the title validation message is visible after trying to save without a title
    await expect(page.getByText('Title validation should appear')).toBeVisible();
  });
});