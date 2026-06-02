import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Search task by title', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there is a search input for tasks
    const searchInput = page.getByRole('textbox');
    await expect(searchInput).toBeVisible();
    await searchInput.click();
    await searchInput.fill('task'); // Assuming 'task' is the search term

    // Assuming there is a search button to click after entering the search term
    await page.getByRole('button', { name: /search|find/i }).click();
    await page.waitForLoadState('networkidle');

    // Assuming the matching task appears with some identifiable text
    await expect(page.getByText('Matching task')).toBeVisible();
  });
});