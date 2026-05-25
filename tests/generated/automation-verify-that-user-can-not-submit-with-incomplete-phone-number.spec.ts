import { test, expect, Page } from '@playwright/test';

class PhoneNumberPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://ice-city.uz/phone-number');
    await this.page.waitForLoadState('networkidle');
  }

  async selectLanguage(language: string) {
    await this.page.selectOption('[data-testid="language-select"]', language);
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.page.fill('[data-testid="phone-input"]', phoneNumber);
  }

  async clickButton(buttonText: string) {
    await this.page.click(`button:has-text("${buttonText}")`);
  }

  async getErrorMessage(): Promise<string> {
    return await this.page.textContent('[data-testid="error-message"]');
  }

  async isOnPhoneNumberScreen(): Promise<boolean> {
    return await this.page.isVisible('[data-testid="phone-input"]');
  }

  async isOnOTPVerificationScreen(): Promise<boolean> {
    return await this.page.isVisible('[data-testid="otp-input"]');
  }
}

test.describe('Automation', () => {
  test('Verify that user cannot submit with incomplete phone number', async ({ page }) => {
    const phoneNumberPage = new PhoneNumberPage(page);

    await phoneNumberPage.open();

    await phoneNumberPage.selectLanguage('p1');

    await phoneNumberPage.enterPhoneNumber('p1');

    await phoneNumberPage.clickButton('p1');

    const errorMessage = await phoneNumberPage.getErrorMessage();
    expect(errorMessage).toBe('p1');

    const isOnPhoneNumberScreen = await phoneNumberPage.isOnPhoneNumberScreen();
    expect(isOnPhoneNumberScreen).toBeTruthy();

    const isOnOTPVerificationScreen = await phoneNumberPage.isOnOTPVerificationScreen();
    expect(isOnOTPVerificationScreen).toBeFalsy();
  });
});