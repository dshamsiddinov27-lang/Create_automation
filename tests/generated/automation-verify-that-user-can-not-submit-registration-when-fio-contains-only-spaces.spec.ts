import { test, expect, Page } from '@playwright/test';

class PhoneNumberScreen {
  constructor(private page: Page) {}

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

  async enterOTPCode(otpCode: string) {
    // Assuming there's a specific OTP input field
    await this.page.getByRole('textbox').fill(otpCode, { timeout: 10000 });
  }

  async enterSpacesIntoField(spaces: string, fieldName: string) {
    await this.page.getByRole('textbox', { name: fieldName }).fill(spaces, { timeout: 10000 });
  }

  async leaveField(fieldName: string) {
    await this.page.getByRole('textbox', { name: fieldName }).blur();
    await this.page.waitForTimeout(500);
  }

  async isButtonDisabled(buttonName: string) {
    const button = await this.page.getByRole('button', { name: buttonName });
    return await button.isDisabled();
  }

  async isValidationMessageDisplayed(language: string) {
    // Assuming the validation message is displayed as text
    return await this.page.getByText('Validation message in ' + language).isVisible();
  }
}

test.describe('Automation', () => {
  test('Verify that user cannot submit registration when FIO contains only spaces', async ({ page }) => {
    const phoneNumberScreen = new PhoneNumberScreen(page);

    await page.goto('https://ice-city.uz/');
    await page.waitForLoadState('networkidle');

    await phoneNumberScreen.selectLanguage('p1');
    await phoneNumberScreen.enterPhoneNumber('p1');
    await phoneNumberScreen.clickButton('p1');
    await phoneNumberScreen.enterOTPCode('p1');

    // Assuming navigation to a new page
    await page.waitForLoadState('networkidle');

    await phoneNumberScreen.enterSpacesIntoField('p1', 'p2');
    await phoneNumberScreen.leaveField('p1');

    const isButtonDisabled = await phoneNumberScreen.isButtonDisabled('p1');
    expect(isButtonDisabled).toBe(true);

    const isValidationMessageDisplayed = await phoneNumberScreen.isValidationMessageDisplayed('Russian');
    expect(isValidationMessageDisplayed).toBe(true);
  });
});