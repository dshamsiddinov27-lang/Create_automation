import { test, expect } from '@playwright/test';

test.describe('Todo List Application', () => {
  test('Verify user can complete todo item', async ({ page }) => {
    await page.goto('https://resonant-chaja-411a11.netlify.app/');
    await page.waitForLoadState('domcontentloaded');

    const todoInput = page.getByTestId('todo-input');
    await expect(todoInput).toBeVisible();
    await todoInput.fill('Complete task');

    await page.getByTestId('add-button').click();
    await page.waitForLoadState('networkidle');

    const todoCheckbox = page.getByTestId('todo-checkbox-1');
    await expect(todoCheckbox).toBeVisible();
    await todoCheckbox.check();

    await expect(todoCheckbox).toBeChecked();
    await expect(page.getByTestId('todo-text-1')).toHaveClass(/completed/);
  });
});