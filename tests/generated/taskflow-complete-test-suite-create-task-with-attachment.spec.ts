import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Create task with attachment', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there's a button or link to open the file upload dialog
    await page.getByRole('button', { name: /upload file|attach file/i }).click();
    
    // Simulate file upload
    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.getByRole('button', { name: /upload file|attach file/i }).click() // Click again to trigger file chooser
    ]);
    await fileChooser.setFiles('path/to/your/file.txt');

    // Verify the file is attached
    await expect(page.getByText('file.txt')).toBeVisible();
  });
});