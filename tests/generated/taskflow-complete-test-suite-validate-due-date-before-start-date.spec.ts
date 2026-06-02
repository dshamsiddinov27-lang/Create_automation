import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Validate due date before start date', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there are specific input fields for start date and due date
    const startDateInput = page.getByRole('textbox', { name: /start date/i });
    const dueDateInput = page.getByRole('textbox', { name: /due date/i });

    await expect(startDateInput).toBeVisible();
    await startDateInput.click();
    await startDateInput.fill('2023-12-31'); // Example invalid start date

    await expect(dueDateInput).toBeVisible();
    await dueDateInput.click();
    await dueDateInput.fill('2023-01-01'); // Example invalid due date

    // Assuming there's a button to validate or submit the dates
    await page.getByRole('button', { name: /validate|submit/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming the validation message appears as text on the page
    await expect(page.getByText('Date validation should appear')).toBeVisible();
  });
});