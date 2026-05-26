import { test, expect } from '@playwright/test';

test.describe('Todo List Application', () => {
  test('Verify empty state disappears after adding todo', async ({ page }) => {
    await page.goto('https://resonant-chaja-411a11.netlify.app/');
    await page.waitForLoadState('domcontentloaded');

    const todoInput = page.getByTestId('todo-input');
    await expect(todoInput).toBeVisible();
    await todoInput.fill('Study automation');

    await page.getByTestId('add-button').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('empty-state')).not.toBeVisible();
  });
});