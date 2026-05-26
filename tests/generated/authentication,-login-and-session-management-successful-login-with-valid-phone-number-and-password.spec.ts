import { test, expect } from '@playwright/test';

test.describe('Authentication, Login and Session Management', () => {
  test('Successful login with valid phone number and password', async ({ page }) => {
    // Navigate to the signin page
    await page.goto('https://ice-city.uz/signin');
    await page.waitForLoadState('networkidle');

    // Fill in the login field with the phone number
    await page.getByRole('textbox', { name: 'Phone' }).fill('+998902345678', { timeout: 10000 });

    // Fill in the password field
    await page.getByRole('textbox', { name: 'Password' }).fill('BekTemir123!', { timeout: 10000 });

    // Click the "Kirish" button
    await page.getByRole('button', { name: 'Kirish' }).click({ timeout: 10000 });
    await page.waitForTimeout(500);

    // Verify redirection to the dashboard
    await page.waitForURL('https://ice-city.uz/', { timeout: 10000 });
    await page.waitForLoadState('networkidle');

    // Check that the top navigation displays the user name
    await expect(page.getByText('Bek Temir')).toBeVisible({ timeout: 10000 });

    // Check that the sidebar shows available modules including "HR"
    await expect(page.getByText('HR')).toBeVisible({ timeout: 10000 });
  });
});