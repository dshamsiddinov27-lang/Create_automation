import { test, expect } from '@playwright/test';

test.describe('Todo List Application', () => {
  test('Verify user can add a new todo item', async ({ page }) => {
    await page.goto('https://resonant-chaja-411a11.netlify.app/');
    await page.waitForLoadState('domcontentloaded');

    const todoInput = page.getByTestId('todo-input');
    await expect(todoInput).toBeVisible();
    await todoInput.fill('Buy milk');

    await page.getByTestId('add-button').click();
    await page.waitForLoadState('networkidle');

    await expect(page.getByTestId('todo-text-1')).toHaveText('Buy milk');
    await expect(page.getByTestId('todo-item-1')).toBeVisible();
  });
});