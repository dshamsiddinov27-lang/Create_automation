import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Course curriculum is visible', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/courses/1');
    await page.waitForLoadState('domcontentloaded');

    const curriculumLocator = page.getByTestId('course-curriculum')
      .or(page.getByTestId('course-modules'));
    await expect(curriculumLocator.first()).toBeVisible({ timeout: 20000 });

    const courseSections = page.getByTestId('course-sections');
    await expect(courseSections.first()).toBeVisible({ timeout: 20000 });
  });
});