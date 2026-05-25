import { test, expect, Page } from '@playwright/test';

class AuthenticationPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://ice-city.uz/authentication');
    await this.page.waitForLoadState('networkidle');
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.page.getByRole('textbox', { name: 'Phone' }).fill(phoneNumber, { timeout: 10000 });
  }

  async clickButton(buttonName: string) {
    await this.page.getByRole('button', { name: buttonName }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }
}

class OTPVerificationPage {
  constructor(private page: Page) {}

  async isDisplayed() {
    await expect(this.page.getByText('OTP Verification')).toBeVisible({ timeout: 10000 });
  }

  async otpInputShouldContainDigits(digits: number) {
    const otpInput = this.page.getByRole('textbox');
    await expect(otpInput).toHaveAttribute('maxlength', digits.toString(), { timeout: 10000 });
  }

  async enterOTPCode(otpCode: string) {
    await this.page.getByRole('textbox').fill(otpCode, { timeout: 10000 });
  }
}

class MainPage {
  constructor(private page: Page) {}

  async isOpenedSuccessfully() {
    await expect(this.page.getByText('Welcome')).toBeVisible({ timeout: 10000 });
  }
}

test.describe('Automation', () => {
  test('Successful login with valid phone number and OTP', async ({ page }) => {
    const authenticationPage = new AuthenticationPage(page);
    const otpVerificationPage = new OTPVerificationPage(page);
    const mainPage = new MainPage(page);

    await authenticationPage.open();
    await authenticationPage.enterPhoneNumber('p1');
    await authenticationPage.clickButton('p1');

    await otpVerificationPage.isDisplayed();
    await otpVerificationPage.otpInputShouldContainDigits(4);
    await otpVerificationPage.enterOTPCode('p1');
    await authenticationPage.clickButton('p1');

    await mainPage.isOpenedSuccessfully();
  });
});