import { test, expect, Page } from '@playwright/test';

class PhoneNumberScreen {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://ice-city.uz/');
    await this.page.waitForLoadState('networkidle');
  }

  async selectLanguage(language: string) {
    await this.page.getByRole('tab', { name: language }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async leavePhoneInputEmpty() {
    const phoneInput = this.page.getByRole('textbox', { name: 'Phone' });
    await phoneInput.fill('');
  }

  async clickSubmitButton(buttonName: string) {
    await this.page.getByRole('button', { name: buttonName }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async verifyErrorMessage(errorMessage: string) {
    const errorLocator = this.page.getByText(errorMessage);
    await expect(errorLocator).toBeVisible({ timeout: 10000 });
  }

  async verifyOnPhoneNumberScreen() {
    const phoneInput = this.page.getByRole('textbox', { name: 'Phone' });
    await expect(phoneInput).toBeVisible({ timeout: 10000 });
  }

  async verifyNotNavigatedToOTP() {
    const otpScreenLocator = this.page.getByText('OTP Verification');
    await expect(otpScreenLocator).not.toBeVisible({ timeout: 10000 });
  }
}

test.describe('Automation', () => {
  test('Verify that user can not submit with empty phone number', async ({ page }) => {
    const phoneNumberScreen = new PhoneNumberScreen(page);

    await phoneNumberScreen.open();
    await phoneNumberScreen.selectLanguage('p1');
    await phoneNumberScreen.leavePhoneInputEmpty();
    await phoneNumberScreen.clickSubmitButton('p1');
    await phoneNumberScreen.verifyErrorMessage('p1');
    await phoneNumberScreen.verifyOnPhoneNumberScreen();
    await phoneNumberScreen.verifyNotNavigatedToOTP();
  });
});