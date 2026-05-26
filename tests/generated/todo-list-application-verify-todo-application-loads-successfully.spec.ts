import { test, expect } from '@playwright/test';

test.describe('Todo List Application', () => {
  test('Verify Todo application loads successfully', async ({ page }) => {
    await page.goto('https://resonant-chaja-411a11.netlify.app/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByTestId('todo-app')).toBeVisible();
    await expect(page.getByTestId('app-title')).toHaveText('Todo List');
    await expect(page.getByTestId('todo-input')).toBeVisible();
    await expect(page.getByTestId('add-button')).toBeVisible();
    await expect(page.getByTestId('empty-state')).toHaveText('No todos yet');
  });
});