import { test, expect, Page } from '@playwright/test';

class OnboardingPage {
  constructor(private page: Page) {}

  async verifySplashScreenLogo() {
    await expect(this.page.getByText('p1')).toBeVisible({ timeout: 10000 });
  }

  async navigateToPhoneNumberScreen() {
    await this.page.waitForLoadState('networkidle');
  }

  async selectLanguage(language: string) {
    await this.page.getByRole('tab', { name: language }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async verifyTextDisplayed(text: string) {
    await expect(this.page.getByText(text)).toBeVisible({ timeout: 10000 });
  }

  async verifyPhoneInputWithMask(mask: string) {
    await expect(this.page.getByPlaceholder(mask)).toBeVisible({ timeout: 10000 });
  }

  async verifyButtonDisabled(buttonText: string) {
    await expect(this.page.getByRole('button', { name: buttonText })).toBeDisabled({ timeout: 10000 });
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.page.getByRole('textbox').fill(phoneNumber);
  }

  async verifyButtonEnabled(buttonText: string) {
    await expect(this.page.getByRole('button', { name: buttonText })).toBeEnabled({ timeout: 10000 });
  }

  async clickButton(buttonText: string) {
    await this.page.getByRole('button', { name: buttonText }).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async verifyNavigationToPage(pageName: string) {
    await expect(this.page.getByText(pageName)).toBeVisible({ timeout: 10000 });
  }

  async verifyOTPFieldsDisplayed() {
    await expect(this.page.locator('input[type="text"]')).toHaveCount(5, { timeout: 10000 });
  }

  async verifyPhoneNumberMasked() {
    // Assuming the masked phone number is displayed somewhere
    await expect(this.page.getByText('***')).toBeVisible({ timeout: 10000 });
  }

  async verifyResendTimerText(text: string) {
    await expect(this.page.getByText(text)).toBeVisible({ timeout: 10000 });
  }

  async enterOTPCode(otpCode: string) {
    const otpInputs = this.page.locator('input[type="text"]');
    for (let i = 0; i < otpCode.length; i++) {
      await otpInputs.nth(i).fill(otpCode[i]);
    }
  }

  async verifyOTPCodeAccepted() {
    // Assuming some success message or navigation indicates acceptance
    await expect(this.page.getByText('Success')).toBeVisible({ timeout: 10000 });
  }

  async verifyFieldsVisible(fields: string[]) {
    for (const field of fields) {
      await expect(this.page.getByLabel(field)).toBeVisible({ timeout: 10000 });
    }
  }

  async verifyGenderOptionsVisible(option1: string, option2: string) {
    await expect(this.page.getByText(option1)).toBeVisible({ timeout: 10000 });
    await expect(this.page.getByText(option2)).toBeVisible({ timeout: 10000 });
  }

  async uploadProfilePhoto() {
    // Assuming there's an input for file upload
    await this.page.setInputFiles('input[type="file"]', 'path/to/photo.jpg');
  }

  async enterFullName(fullName: string) {
    await this.page.getByRole('textbox', { name: 'Full Name' }).fill(fullName);
  }

  async selectDateOfBirth(dateOfBirth: string) {
    // Assuming there's a date picker
    await this.page.getByRole('textbox', { name: 'Date of Birth' }).fill(dateOfBirth);
  }

  async selectGender(gender: string) {
    await this.page.getByText(gender).click({ timeout: 10000 });
    await this.page.waitForTimeout(500);
  }

  async verifyVirtualCardScreenDisplayed() {
    await expect(this.page.getByText('Virtual Card')).toBeVisible({ timeout: 10000 });
  }

  async verifyCardPreviewVisible() {
    await expect(this.page.getByText('Card Preview')).toBeVisible({ timeout: 10000 });
  }

  async verifySectionDisplayed(section: string) {
    await expect(this.page.getByText(section)).toBeVisible({ timeout: 10000 });
  }

  async verifyPaymentOptionsVisible(options: string[]) {
    for (const option of options) {
      await expect(this.page.getByText(option)).toBeVisible({ timeout: 10000 });
    }
  }

  async verifyVirtualCardCreated() {
    await expect(this.page.getByText('Virtual Card Created')).toBeVisible({ timeout: 10000 });
  }

  async verifyVirtualCardInWallet() {
    await expect(this.page.getByText('Wallet')).toBeVisible({ timeout: 10000 });
  }

  async verifyOnboardingScreensInLanguage(language: string) {
    await expect(this.page.getByText(language)).toBeVisible({ timeout: 10000 });
  }
}

test.describe('Automation', () => {
  test('User onboarding with valid data (RU)', async ({ page }) => {
    const onboardingPage = new OnboardingPage(page);

    await page.goto('https://ice-city.uz/');
    await onboardingPage.verifySplashScreenLogo();
    await onboardingPage.navigateToPhoneNumberScreen();
    await onboardingPage.selectLanguage('p1');
    await onboardingPage.verifyTextDisplayed('p1');
    await onboardingPage.verifyTextDisplayed('p1');
    await onboardingPage.verifyPhoneInputWithMask('p1');
    await onboardingPage.verifyButtonDisabled('p1');
    await onboardingPage.enterPhoneNumber('p1');
    await onboardingPage.verifyButtonEnabled('p1');
    await onboardingPage.clickButton('p1');
    await onboardingPage.verifyNavigationToPage('p1');
    await onboardingPage.verifyOTPFieldsDisplayed();
    await onboardingPage.verifyPhoneNumberMasked();
    await onboardingPage.verifyResendTimerText('p1');
    await onboardingPage.enterOTPCode('p1');
    await onboardingPage.verifyOTPCodeAccepted();
    await onboardingPage.verifyNavigationToPage('p1');
    await onboardingPage.verifyFieldsVisible(['p1', 'p1', 'p1', 'p1']);
    await onboardingPage.verifyGenderOptionsVisible('p1', 'p2');
    await onboardingPage.verifyButtonDisabled('p1');
    await onboardingPage.uploadProfilePhoto();
    await onboardingPage.enterFullName('p1');
    await onboardingPage.selectDateOfBirth('p1');
    await onboardingPage.selectGender('p1');
    await onboardingPage.verifyButtonEnabled('p1');
    await onboardingPage.clickButton('p1');
    await onboardingPage.verifyNavigationToPage('p1');
    await onboardingPage.verifyTextDisplayed('p1');
    await onboardingPage.verifyTextDisplayed('p1');
    await onboardingPage.clickButton('p1');
    await onboardingPage.verifyVirtualCardScreenDisplayed();
    await onboardingPage.verifyCardPreviewVisible();
    await onboardingPage.verifySectionDisplayed('p1');
    await onboardingPage.verifyPaymentOptionsVisible(['p1', 'p1', 'p1']);
    await onboardingPage.clickButton('p1');
    await onboardingPage.verifyNavigationToPage('Dashboard');
    await onboardingPage.verifyVirtualCardCreated();
    await onboardingPage.verifyVirtualCardInWallet();
    await onboardingPage.verifyOnboardingScreensInLanguage('p1');
  });
});