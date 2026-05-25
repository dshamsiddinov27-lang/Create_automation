import { test, expect, Page } from '@playwright/test';

class PhoneNumberScreen {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://ice-city.uz/');
    await this.page.waitForLoadState('networkidle');
  }

  async selectLanguage(language: string) {
    await this.page.getByRole('tab', { name: language }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.page.getByRole('textbox', { name: 'Phone' }).fill(phoneNumber, { timeout: 10000 });
  }

  async clickButton(buttonName: string) {
    await this.page.getByRole('button', { name: buttonName }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async verifyErrorMessage(errorMessage: string) {
    await expect(this.page.getByText(errorMessage)).toBeVisible({ timeout: 10000 });
  }

  async verifyOnPhoneNumberScreen() {
    await expect(this.page.getByRole('textbox', { name: 'Phone' })).toBeVisible({ timeout: 10000 });
  }

  async verifyNotOnOtpScreen() {
    await expect(this.page.getByText('OTP Verification')).not.toBeVisible({ timeout: 10000 });
  }
}

test.describe('Automation', () => {
  test('Verify that user can not submit with incomplete phone number', async ({ page }) => {
    const phoneNumberScreen = new PhoneNumberScreen(page);

    await phoneNumberScreen.open();
    await phoneNumberScreen.selectLanguage('p1');
    await phoneNumberScreen.enterPhoneNumber('p1');
    await phoneNumberScreen.clickButton('p1');
    await phoneNumberScreen.verifyErrorMessage('p1');
    await phoneNumberScreen.verifyOnPhoneNumberScreen();
    await phoneNumberScreen.verifyNotOnOtpScreen();
  });
});