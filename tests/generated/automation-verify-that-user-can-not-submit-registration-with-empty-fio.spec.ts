import { test, expect, Page } from '@playwright/test';

class PhoneNumberScreen {
  constructor(private page: Page) {}

  async selectLanguage(language: string) {
    await this.page.click(`[data-testid="language-selector-${language}"]`);
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.page.fill('[data-testid="phone-input"]', phoneNumber);
  }

  async clickButton(buttonId: string) {
    await this.page.click(`[data-testid="button-${buttonId}"]`);
  }

  async enterOTPCode(otpCode: string) {
    await this.page.fill('[data-testid="otp-input"]', otpCode);
  }

  async leaveFieldEmpty(fieldId: string) {
    await this.page.fill(`[data-testid="field-${fieldId}"]`, '');
  }

  async isButtonDisabled(buttonId: string): Promise<boolean> {
    return await this.page.isDisabled(`[data-testid="button-${buttonId}"]`);
  }

  async getValidationMessage(fieldId: string): Promise<string> {
    return await this.page.textContent(`[data-testid="validation-${fieldId}"]`);
  }
}

test.describe('Automation', () => {
  test('Verify that user cannot submit registration with empty FIO', async ({ page }) => {
    const phoneNumberScreen = new PhoneNumberScreen(page);

    // Given the user launches the app and opens the phone number screen
    await page.goto('https://ice-city.uz/');
    await page.waitForLoadState('networkidle');

    // And the language "p1" is selected
    await phoneNumberScreen.selectLanguage('p1');

    // When the user enters valid phone number "p1"
    await phoneNumberScreen.enterPhoneNumber('p1');

    // And I click the "p1" button
    await phoneNumberScreen.clickButton('p1');

    // And the user enters valid OTP code "p1"
    await phoneNumberScreen.enterOTPCode('p1');

    // Then the user should be navigated to page "p1"
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('p1');

    // When the user leaves the field "p1" empty
    await phoneNumberScreen.leaveFieldEmpty('p1');

    // Then the "p1" button should remain disabled
    const isDisabled = await phoneNumberScreen.isButtonDisabled('p1');
    expect(isDisabled).toBe(true);

    // When the user attempts to click disabled button "p1"
    try {
      await phoneNumberScreen.clickButton('p1');
    } catch (error) {
      // Handle error gracefully if button click fails
    }

    // Then no navigation should occur
    expect(page.url()).toContain('p1');

    // And the validation message under field "p1" should be displayed in Russian
    const validationMessage = await phoneNumberScreen.getValidationMessage('p1');
    expect(validationMessage).toBe('Введите ФИО');
  });
});