import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Filter tasks by date range', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a date range selector, replace 'Date Range' with the actual label or placeholder
    const dateRangeInput = page.getByRole('textbox').or(page.getByPlaceholder('Date Range'));
    await expect(dateRangeInput.first()).toBeVisible();
    await dateRangeInput.first().click();
    // Assuming a date picker or similar widget appears, select the date range
    // This part is highly dependent on the actual UI implementation
    // Example: await page.getByText('Start Date').click();
    // Example: await page.getByText('End Date').click();

    // Assuming there is a button to apply the date filter, replace 'Apply' with the actual button text
    await page.getByRole('button', { name: /apply|применить|qo'llash/i }).click();
    await page.waitForLoadState('networkidle');

    // Verify that tasks are filtered, replace 'Filtered Task' with actual text or identifier
    await expect(page.getByText('Filtered Task')).toBeVisible();
  });
});