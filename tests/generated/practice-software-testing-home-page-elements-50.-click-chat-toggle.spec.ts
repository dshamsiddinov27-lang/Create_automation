import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing Home Page Elements', () => {
  test('50. Click Chat Toggle', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    await page.getByTestId('chat-toggle').click();
    await expect(page.getByTestId('chat-toggle')).toBeVisible();
  });
});