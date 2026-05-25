import { test, expect, Page } from '@playwright/test';

class PhoneNumberScreen {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('https://ice-city.uz/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async selectLanguage(language: string) {
    await this.page.click(`[data-testid="language-selector"] [data-testid="${language}"]`);
  }

  async leavePhoneInputEmpty() {
    await this.page.fill('[data-testid="phone-input"]', '');
  }

  async clickButton(buttonTestId: string) {
    await this.page.click(`[data-testid="${buttonTestId}"]`);
  }

  async getErrorMessage(): Promise<string> {
    return await this.page.textContent('[data-testid="phone-error-message"]');
  }

  async isOnPhoneNumberScreen(): Promise<boolean> {
    return await this.page.isVisible('[data-testid="phone-input"]');
  }

  async isOnOtpVerificationScreen(): Promise<boolean> {
    return await this.page.isVisible('[data-testid="otp-verification-screen"]');
  }
}

test.describe('Automation', () => {
  test('Verify that user cannot submit with empty phone number', async ({ page }) => {
    const phoneNumberScreen = new PhoneNumberScreen(page);

    try {
      await phoneNumberScreen.navigateTo();
      await phoneNumberScreen.selectLanguage('p1');
      await phoneNumberScreen.leavePhoneInputEmpty();
      await phoneNumberScreen.clickButton('p1');

      const errorMessage = await phoneNumberScreen.getErrorMessage();
      expect(errorMessage).toBe('p1');

      const isOnPhoneNumberScreen = await phoneNumberScreen.isOnPhoneNumberScreen();
      expect(isOnPhoneNumberScreen).toBe(true);

      const isOnOtpVerificationScreen = await phoneNumberScreen.isOnOtpVerificationScreen();
      expect(isOnOtpVerificationScreen).toBe(false);
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });
});