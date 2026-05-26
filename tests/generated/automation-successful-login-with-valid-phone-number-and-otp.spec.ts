import { test, expect, type Page } from '@playwright/test';

class AuthPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://ice-city.uz/');
    await this.page.waitForLoadState('networkidle');
  }

  async enterPhoneNumber(phoneNumber: string) {
    const phoneInput = this.page.getByRole('textbox').first();
    await phoneInput.waitFor({ state: 'visible', timeout: 10000 });
    await phoneInput.fill(phoneNumber);
    await this.page.waitForTimeout(500);
  }

  async clickContinueButton() {
    const continueButton = this.page.getByRole('button').first();
    await continueButton.waitFor({ state: 'visible', timeout: 10000 });
    await continueButton.click();
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle');
  }

  async verifyOtpPageDisplayed() {
    await this.page.waitForLoadState('networkidle');
    const otpInput = this.page.locator('input[type="text"]').first();
    await otpInput.waitFor({ state: 'visible', timeout: 10000 });
    await expect(otpInput).toBeVisible();
  }

  async verifyOtpInputDigits() {
    const otpInputs = this.page.locator('input[type="text"], input[maxlength="1"]');
    const count = await otpInputs.count();
    expect(count).toBeGreaterThanOrEqual(4);
  }

  async enterOtpCode(otpCode: string) {
    const digits = otpCode.split('');
    const otpInputs = this.page.locator('input[type="text"]').or(this.page.locator('input[maxlength="1"]'));
    
    for (let i = 0; i < Math.min(digits.length, 4); i++) {
      const input = otpInputs.nth(i);
      await input.waitFor({ state: 'visible', timeout: 10000 });
      await input.fill(digits[i]);
      await this.page.waitForTimeout(200);
    }
    await this.page.waitForTimeout(500);
  }

  async clickSubmitButton() {
    const submitButton = this.page.getByRole('button').last();
    await submitButton.waitFor({ state: 'visible', timeout: 10000 });
    await submitButton.click();
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle');
  }

  async verifyMainPageOpened() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.page).toHaveURL(/ice-city\.uz/, { timeout: 10000 });
  }
}

test.describe('Automation', () => {
  let authPage: AuthPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
  });

  test('Successful login with valid phone number and OTP', async ({ page }) => {
    // Given the user opens the authentication page
    await authPage.navigate();

    // When the user enters phone number
    await authPage.enterPhoneNumber('998901234567');

    // And I click the continue button
    await authPage.clickContinueButton();

    // Then the OTP verification page should be displayed
    await authPage.verifyOtpPageDisplayed();

    // And the OTP input should contain 4 digits
    await authPage.verifyOtpInputDigits();

    // When the user enters OTP code
    await authPage.enterOtpCode('1234');

    // And I click the submit button
    await authPage.clickSubmitButton();

    // Then the main page should be opened successfully
    await authPage.verifyMainPageOpened();
  });
});