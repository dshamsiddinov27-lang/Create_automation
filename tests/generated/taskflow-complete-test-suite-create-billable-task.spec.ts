import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create billable task', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const billableCheckbox = page.getByRole('checkbox', { name: /billable/i });
    await expect(billableCheckbox).toBeVisible();
    await billableCheckbox.click();

    await expect(billableCheckbox).toBeChecked();
  });
});