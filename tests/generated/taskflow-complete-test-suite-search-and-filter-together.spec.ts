import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Search and filter together', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    // Assuming there are specific elements for search and filter
    const searchInput = page.getByRole('textbox', { name: /search/i });
    await expect(searchInput).toBeVisible();
    await searchInput.fill('search term'); // Replace 'search term' with the actual term if specified

    const filterButton = page.getByRole('button', { name: /filter/i });
    await expect(filterButton).toBeVisible();
    await filterButton.click();
    await page.waitForLoadState('networkidle');

    // Assuming there is a specific element that indicates filtered results
    await expect(page.getByText('Filtered result')).toBeVisible();
  });
});