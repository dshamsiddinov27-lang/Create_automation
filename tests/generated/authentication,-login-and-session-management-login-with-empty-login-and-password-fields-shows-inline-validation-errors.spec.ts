import { test, expect, Page } from '@playwright/test';

class SignInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://ice-city.uz/signin');
    await this.page.waitForLoadState('networkidle');
  }

  async clickKirishButton() {
    await this.page.getByRole('button', { name: 'Kirish' }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async isLoginFieldHighlightedInRed() {
    const loginField = this.page.getByRole('textbox', { name: 'Login' });
    const color = await loginField.evaluate((el) => getComputedStyle(el).borderColor);
    return color === 'rgb(255, 0, 0)'; // Assuming red is represented as rgb(255, 0, 0)
  }

  async isPasswordFieldHighlightedInRed() {
    const passwordField = this.page.getByRole('textbox', { name: 'Password' });
    const color = await passwordField.evaluate((el) => getComputedStyle(el).borderColor);
    return color === 'rgb(255, 0, 0)'; // Assuming red is represented as rgb(255, 0, 0)
  }

  async isLoginErrorMessageDisplayed() {
    return this.page.getByText("Login noto'g'ri kiritildi").isVisible({ timeout: 10000 });
  }

  async isPasswordErrorMessageDisplayed() {
    return this.page.getByText("Parol noto'g'ri kiritildi").isVisible({ timeout: 10000 });
  }

  async isToastNotificationDisplayed() {
    return this.page.getByText('Login failed').isVisible({ timeout: 10000 });
  }
}

test.describe('Authentication, Login and Session Management', () => {
  test('Login with empty login and password fields shows inline validation errors', async ({ page }) => {
    const signInPage = new SignInPage(page);

    await signInPage.navigate();

    await signInPage.clickKirishButton();

    expect(await signInPage.isLoginFieldHighlightedInRed()).toBeTruthy();
    expect(await signInPage.isLoginErrorMessageDisplayed()).toBeTruthy();
    expect(await signInPage.isPasswordFieldHighlightedInRed()).toBeTruthy();
    expect(await signInPage.isPasswordErrorMessageDisplayed()).toBeTruthy();
    expect(await signInPage.isToastNotificationDisplayed()).toBeTruthy();
  });
});