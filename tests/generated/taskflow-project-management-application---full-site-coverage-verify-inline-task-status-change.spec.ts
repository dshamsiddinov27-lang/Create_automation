import { test, expect } from '@playwright/test';

test.describe('TaskFlow Project Management Application - Full Site Coverage', () => {
  test('Verify inline task status change', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const statusDropdown = page.getByTestId('task-status-select-1');
    await expect(statusDropdown).toBeVisible({ timeout: 15000 });
    await statusDropdown.click();
    await page.waitForLoadState('networkidle');

    const doneOption = page.getByText('done');
    await expect(doneOption).toBeVisible({ timeout: 15000 });
    await doneOption.click();
    await page.waitForLoadState('networkidle');

    const successToast = page.getByTestId('toast-success');
    await expect(successToast).toBeVisible({ timeout: 15000 });
  });
});