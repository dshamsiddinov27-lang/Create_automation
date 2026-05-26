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

  async fillLoginField(phone: string) {
    await this.page.getByRole('textbox', { name: 'Phone' }).fill(phone);
  }

  async fillPasswordField(password: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async clickSignInButton() {
    await this.page.getByRole('button', { name: 'Kirish' }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async isLoadingSpinnerVisible() {
    return await this.page.locator('button:has-text("Kirish") >> .spinner').isVisible();
  }

  async isOnSignInPage() {
    return this.page.url() === 'https://ice-city.uz/signin';
  }
}

test.describe('Authentication, Login and Session Management', () => {
  test('Login with valid phone but incorrect password remains on signin page', async ({ page }) => {
    const signInPage = new SignInPage(page);

    await signInPage.navigate();
    await signInPage.fillLoginField('+998911111111');
    await signInPage.fillPasswordField('WrongPassword123!');
    await signInPage.clickSignInButton();

    const spinnerVisible = await signInPage.isLoadingSpinnerVisible();
    expect(spinnerVisible).toBe(true);

    const onSignInPage = await signInPage.isOnSignInPage();
    expect(onSignInPage).toBe(true);
  });
});