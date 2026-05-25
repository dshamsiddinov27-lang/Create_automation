import { test, expect, Page } from '@playwright/test';

class PhoneNumberScreen {
  constructor(private page: Page) {}

  async selectLanguage(language: string) {
    await this.page.click(`[data-testid="language-selector-${language}"]`);
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.page.fill('[data-testid="phone-number-input"]', phoneNumber);
  }

  async clickButton(buttonId: string) {
    await this.page.click(`[data-testid="button-${buttonId}"]`);
  }

  async enterOTPCode(otpCode: string) {
    await this.page.fill('[data-testid="otp-input"]', otpCode);
  }

  async navigateToPage(pageId: string) {
    await this.page.waitForLoadState('networkidle');
    expect(this.page.url()).toContain(pageId);
  }

  async enterSpacesIntoField(spaces: string, fieldId: string) {
    await this.page.fill(`[data-testid="field-${fieldId}"]`, spaces);
  }

  async leaveField(fieldId: string) {
    await this.page.blur(`[data-testid="field-${fieldId}"]`);
  }

  async isButtonDisabled(buttonId: string) {
    const isDisabled = await this.page.isDisabled(`[data-testid="button-${buttonId}"]`);
    expect(isDisabled).toBe(true);
  }

  async isValidationMessageDisplayed(fieldId: string) {
    const validationMessage = await this.page.textContent(`[data-testid="validation-${fieldId}"]`);
    expect(validationMessage).toMatch(/.*введите корректные данные.*/i);
  }
}

test.describe('Automation', () => {
  test('Verify that user cannot submit registration when FIO contains only spaces', async ({ page }) => {
    const baseURL = 'https://ice-city.uz/';
    const phoneNumberScreen = new PhoneNumberScreen(page);

    await page.goto(baseURL);
    await page.waitForLoadState('load');

    await phoneNumberScreen.selectLanguage('p1');
    await phoneNumberScreen.enterPhoneNumber('p1');
    await phoneNumberScreen.clickButton('p1');
    await phoneNumberScreen.enterOTPCode('p1');
    await phoneNumberScreen.navigateToPage('p1');

    await phoneNumberScreen.enterSpacesIntoField('p1', 'p2');
    await phoneNumberScreen.leaveField('p1');

    await phoneNumberScreen.isButtonDisabled('p1');
    await phoneNumberScreen.isValidationMessageDisplayed('p1');
  });
});