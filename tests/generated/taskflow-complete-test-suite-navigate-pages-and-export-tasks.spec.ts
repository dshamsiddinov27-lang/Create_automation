import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Navigate pages and export tasks', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a button or link to navigate to the next page
    await page.getByRole('button', { name: /next page/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a button to export tasks
    await page.getByRole('button', { name: /export tasks/i }).click();
    await page.waitForLoadState('networkidle');

    // Check if the CSV file is downloaded
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      // Trigger the download
      page.getByRole('button', { name: /export tasks/i }).click()
    ]);

    const path = await download.path();
    expect(path).not.toBeNull();
  });
});