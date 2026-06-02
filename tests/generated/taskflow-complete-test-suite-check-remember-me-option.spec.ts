import { test, expect } from '@playwright/test';

test.describe('TaskFlow Complete Test Suite', () => {
  test('Check remember me option', async ({ page }) => {
    await page.goto('https://taskflow-qa.vercel.app/');
    await page.waitForLoadState('domcontentloaded');

    const rememberMeCheckbox = page.getByRole('checkbox', { name: /remember me/i });
    await expect(rememberMeCheckbox).toBeVisible();
    await rememberMeCheckbox.click();

    await expect(rememberMeCheckbox).toBeChecked();
  });
});