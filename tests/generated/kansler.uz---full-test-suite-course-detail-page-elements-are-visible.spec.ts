import { test, expect } from '@playwright/test';

test.describe('Kansler.uz - Full Test Suite', () => {
  test('Course detail page elements are visible', async ({ page }) => {
    await page.goto('https://kansler-roan.vercel.app/courses/1');
    await page.waitForLoadState('domcontentloaded');

    const courseDetailPage = page.getByTestId('course-detail-page');
    await expect(courseDetailPage).toBeVisible({ timeout: 20000 });

    const courseDetailTitle = page.getByTestId('course-detail-title');
    await expect(courseDetailTitle).toBeVisible({ timeout: 20000 });

    const courseDetailImage = page.getByTestId('course-detail-image');
    await expect(courseDetailImage).toBeVisible({ timeout: 20000 });

    const courseDetailDescription = page.getByTestId('course-detail-description');
    await expect(courseDetailDescription).toBeVisible({ timeout: 20000 });

    const courseDetailPrice = page.getByTestId('course-detail-price');
    await expect(courseDetailPrice).toBeVisible({ timeout: 20000 });

    const courseDetailTeacher = page.getByTestId('course-detail-teacher');
    await expect(courseDetailTeacher).toBeVisible({ timeout: 20000 });

    const courseDetailRating = page.getByTestId('course-detail-rating');
    await expect(courseDetailRating).toBeVisible({ timeout: 20000 });

    const courseDetailDuration = page.getByTestId('course-detail-duration');
    await expect(courseDetailDuration).toBeVisible({ timeout: 20000 });

    const courseEnrollBtn = page.getByTestId('course-enroll-btn');
    await expect(courseEnrollBtn).toBeVisible({ timeout: 20000 });
  });
});