import { test, expect, Page } from '@playwright/test';

class AuthenticationPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://ice-city.uz/');
    await this.page.waitForLoadState('networkidle');
  }

  async enterPhoneNumber(phoneNumber: string) {
    const phoneInput = this.page.getByRole('textbox').first();
    await phoneInput.waitFor({ state: 'visible', timeout: 10000 });
    await phoneInput.clear();
    await phoneInput.fill(phoneNumber);
    await this.page.waitForTimeout(500);
  }

  async clickContinueButton() {
    const continueButton = this.page.getByRole('button').first();
    await continueButton.waitFor({ state: 'visible', timeout: 10000 });
    await continueButton.click();
    await this.page.waitForTimeout(500);
  }

  async isOTPPageDisplayed(): Promise<boolean> {
    await this.page.waitForLoadState('networkidle');
    const otpInput = this.page.getByRole('textbox').first();
    return await otpInput.isVisible();
  }

  async getOTPInputDigits(): Promise<number> {
    const otpInputs = this.page.getByRole('textbox');
    const count = await otpInputs.count();
    return count;
  }

  async enterOTP(otpCode: string) {
    const otpInputs = this.page.getByRole('textbox');
    const digits = otpCode.split('');
    
    for (let i = 0; i < digits.length; i++) {
      const input = otpInputs.nth(i);
      await input.waitFor({ state: 'visible', timeout: 10000 });
      await input.fill(digits[i]);
      await this.page.waitForTimeout(300);
    }
    await this.page.waitForTimeout(500);
  }

  async clickSubmitOTPButton() {
    const submitButton = this.page.getByRole('button').first();
    await submitButton.waitFor({ state: 'visible', timeout: 10000 });
    await submitButton.click();
    await this.page.waitForTimeout(500);
  }

  async isMainPageOpened(): Promise<boolean> {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000);
    return this.page.url().includes('ice-city.uz') && !this.page.url().includes('auth');
  }
}

test.describe('Automation', () => {
  let authPage: AuthenticationPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthenticationPage(page);
  });

  test('Successful login with valid phone number and OTP', async ({ page }) => {
    // Given the user opens the authentication page
    await authPage.navigate();

    // When the user enters phone number
    await authPage.enterPhoneNumber('+998901234567');

    // And I click the continue button
    await authPage.clickContinueButton();

    // Then the OTP verification page should be displayed
    const isOTPPageVisible = await authPage.isOTPPageDisplayed();
    expect(isOTPPageVisible).toBeTruthy();

    // And the OTP input should contain 4 digits
    const otpDigitsCount = await authPage.getOTPInputDigits();
    expect(otpDigitsCount).toBe(4);

    // When the user enters OTP code
    await authPage.enterOTP('1234');

    // And I click the submit button
    await authPage.clickSubmitOTPButton();

    // Then the main page should be opened successfully
    const isMainPageOpen = await authPage.isMainPageOpened();
    expect(isMainPageOpen).toBeTruthy();
  });
});