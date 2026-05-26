import { test, expect } from '@playwright/test';

test.describe('Todo List Application', () => {
  test('Verify input field clears after adding todo', async ({ page }) => {
    await page.goto('https://resonant-chaja-411a11.netlify.app/');
    await page.waitForLoadState('domcontentloaded');

    const todoInput = page.getByTestId('todo-input');
    await expect(todoInput).toBeVisible();
    await todoInput.fill('Learn Playwright');

    await page.getByTestId('add-button').click();
    await page.waitForLoadState('networkidle');

    await expect(todoInput).toHaveValue('');
  });
});