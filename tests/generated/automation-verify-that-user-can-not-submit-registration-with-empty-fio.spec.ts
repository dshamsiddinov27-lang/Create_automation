import { test, expect, Page } from '@playwright/test';

class RegistrationPage {
  constructor(private page: Page) {}

  async openPhoneNumberScreen() {
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

  async enterOTPCode(otpCode: string) {
    // Assuming OTP code is entered in a similar textbox
    await this.page.getByRole('textbox').fill(otpCode, { timeout: 10000 });
  }

  async leaveFieldEmpty(fieldName: string) {
    // Assuming field is a textbox
    await this.page.getByRole('textbox', { name: fieldName }).fill('', { timeout: 10000 });
  }

  async isButtonDisabled(buttonName: string) {
    const button = this.page.getByRole('button', { name: buttonName });
    return await button.isDisabled({ timeout: 10000 });
  }

  async validationMessageDisplayedInRussian(fieldName: string) {
    // Assuming validation message is displayed under the field
    const validationMessage = await this.page.getByText('Введите ваше имя', { timeout: 10000 });
    return validationMessage.isVisible();
  }
}

test.describe('Automation', () => {
  test('Verify that user can not submit registration with empty FIO', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.openPhoneNumberScreen();
    await registrationPage.selectLanguage('p1');
    await registrationPage.enterPhoneNumber('p1');
    await registrationPage.clickButton('p1');
    await registrationPage.enterOTPCode('p1');

    // Assuming navigation to a specific page is verified by checking URL or page content
    await expect(page).toHaveURL(/.*p1/, { timeout: 10000 });

    await registrationPage.leaveFieldEmpty('p1');
    const isDisabled = await registrationPage.isButtonDisabled('p1');
    expect(isDisabled).toBe(true);

    // Attempt to click the disabled button
    await registrationPage.clickButton('p1');

    // Verify no navigation occurs
    await expect(page).toHaveURL(/.*p1/, { timeout: 10000 });

    // Verify validation message is displayed in Russian
    const isValidationMessageVisible = await registrationPage.validationMessageDisplayedInRussian('p1');
    expect(isValidationMessageVisible).toBe(true);
  });
});