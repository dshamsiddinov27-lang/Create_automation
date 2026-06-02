import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create task with tags', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there's a button or link to add tags
    await page.getByRole('button', { name: 'Add Tags' }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there's a textbox to enter tags
    const tagsInput = page.getByRole('textbox');
    await expect(tagsInput).toBeVisible();
    await tagsInput.fill('urgent, important');

    // Assuming there's a button to save tags
    await page.getByRole('button', { name: 'Save Tags' }).click();
    await page.waitForLoadState('networkidle');

    // Assuming there's a visible text or element to confirm tags are saved
    await expect(page.getByText('Tags saved successfully')).toBeVisible();
  });
});