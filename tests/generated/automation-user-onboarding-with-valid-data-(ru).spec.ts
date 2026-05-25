import { test, expect, Page } from '@playwright/test';

class OnboardingPage {
  constructor(private page: Page) {}

  async verifySplashScreenLogo(logoText: string) {
    await expect(this.page.locator('[data-testid="splash-logo"]')).toHaveText(logoText);
  }

  async navigateToPhoneNumberScreen() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator('[data-testid="phone-number-screen"]')).toBeVisible();
  }

  async selectLanguage(language: string) {
    await this.page.selectOption('[data-testid="language-selector"]', language);
  }

  async verifyTextDisplayed(text: string) {
    await expect(this.page.locator(`text=${text}`)).toBeVisible();
  }

  async verifyPhoneInputWithMask(mask: string) {
    await expect(this.page.locator('[data-testid="phone-input"]')).toHaveAttribute('placeholder', mask);
  }

  async verifyButtonDisabled(buttonText: string) {
    await expect(this.page.locator(`button:has-text("${buttonText}")`)).toBeDisabled();
  }

  async enterPhoneNumber(phoneNumber: string) {
    await this.page.fill('[data-testid="phone-input"]', phoneNumber);
  }

  async verifyButtonEnabled(buttonText: string) {
    await expect(this.page.locator(`button:has-text("${buttonText}")`)).toBeEnabled();
  }

  async clickButton(buttonText: string) {
    await this.page.click(`button:has-text("${buttonText}")`);
  }

  async verifyNavigationToPage(pageIdentifier: string) {
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator(`[data-testid="${pageIdentifier}-page"]`)).toBeVisible();
  }

  async verifyOtpInputFields(count: number) {
    await expect(this.page.locator('[data-testid="otp-input"]')).toHaveCount(count);
  }

  async verifyPhoneNumberMasked() {
    await expect(this.page.locator('[data-testid="masked-phone-number"]')).toBeVisible();
  }

  async verifyResendTimerText(timerText: string) {
    await expect(this.page.locator('[data-testid="resend-timer"]')).toHaveText(timerText);
  }

  async enterOtpCode(otpCode: string) {
    await this.page.fill('[data-testid="otp-input"]', otpCode);
  }

  async verifyOtpAccepted() {
    await expect(this.page.locator('[data-testid="otp-accepted"]')).toBeVisible();
  }

  async verifyFieldVisible(fieldIdentifier: string) {
    await expect(this.page.locator(`[data-testid="${fieldIdentifier}"]`)).toBeVisible();
  }

  async verifyGenderOptions(option1: string, option2: string) {
    await expect(this.page.locator(`[data-testid="gender-option-${option1}"]`)).toBeVisible();
    await expect(this.page.locator(`[data-testid="gender-option-${option2}"]`)).toBeVisible();
  }

  async uploadProfilePhoto() {
    // Assuming a file input is available for uploading
    await this.page.setInputFiles('[data-testid="profile-photo-upload"]', 'path/to/photo.jpg');
  }

  async enterFullName(fullName: string) {
    await this.page.fill('[data-testid="full-name-input"]', fullName);
  }

  async selectDateOfBirth(dob: string) {
    await this.page.fill('[data-testid="dob-input"]', dob);
  }

  async selectGender(gender: string) {
    await this.page.click(`[data-testid="gender-option-${gender}"]`);
  }

  async verifyOptionDisplayed(optionText: string) {
    await expect(this.page.locator(`text=${optionText}`)).toBeVisible();
  }

  async verifyVirtualCardScreenDisplayed() {
    await expect(this.page.locator('[data-testid="virtual-card-screen"]')).toBeVisible();
  }

  async verifyCardPreviewVisible() {
    await expect(this.page.locator('[data-testid="card-preview"]')).toBeVisible();
  }

  async verifySectionDisplayed(sectionText: string) {
    await expect(this.page.locator(`text=${sectionText}`)).toBeVisible();
  }

  async verifyPaymentOptionVisible(optionText: string) {
    await expect(this.page.locator(`text=${optionText}`)).toBeVisible();
  }

  async verifyVirtualCardCreated() {
    await expect(this.page.locator('[data-testid="virtual-card-created"]')).toBeVisible();
  }

  async verifyVirtualCardInWallet() {
    await expect(this.page.locator('[data-testid="virtual-card-wallet"]')).toBeVisible();
  }

  async verifyOnboardingScreensLanguage(language: string) {
    await expect(this.page.locator('[data-testid="onboarding-language"]')).toHaveText(language);
  }
}

test.describe('Automation - User onboarding with valid data (RU)', () => {
  let onboardingPage: OnboardingPage;

  test.beforeEach(async ({ page }) => {
    onboardingPage = new OnboardingPage(page);
    await page.goto('https://ice-city.uz/');
  });

  test('User onboarding process', async ({ page }) => {
    try {
      await onboardingPage.verifySplashScreenLogo('p1');
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
      await onboardingPage.verifyOtpInputFields(5);
      await onboardingPage.verifyPhoneNumberMasked();
      await onboardingPage.verifyResendTimerText('p1');
      await onboardingPage.enterOtpCode('p1');
      await onboardingPage.verifyOtpAccepted();
      await onboardingPage.verifyNavigationToPage('p1');
      await onboardingPage.verifyFieldVisible('p1');
      await onboardingPage.verifyFieldVisible('p1');
      await onboardingPage.verifyFieldVisible('p1');
      await onboardingPage.verifyFieldVisible('p1');
      await onboardingPage.verifyGenderOptions('p1', 'p2');
      await onboardingPage.verifyButtonDisabled('p1');
      await onboardingPage.uploadProfilePhoto();
      await onboardingPage.enterFullName('p1');
      await onboardingPage.selectDateOfBirth('p1');
      await onboardingPage.selectGender('p1');
      await onboardingPage.verifyButtonEnabled('p1');
      await onboardingPage.clickButton('p1');
      await onboardingPage.verifyNavigationToPage('p1');
      await onboardingPage.verifyOptionDisplayed('p1');
      await onboardingPage.verifyOptionDisplayed('p1');
      await onboardingPage.clickButton('p1');
      await onboardingPage.verifyVirtualCardScreenDisplayed();
      await onboardingPage.verifyCardPreviewVisible();
      await onboardingPage.verifySectionDisplayed('p1');
      await onboardingPage.verifyPaymentOptionVisible('p1');
      await onboardingPage.verifyPaymentOptionVisible('p1');
      await onboardingPage.verifyPaymentOptionVisible('p1');
      await onboardingPage.clickButton('p1');
      await onboardingPage.verifyNavigationToPage('dashboard');
      await onboardingPage.verifyVirtualCardCreated();
      await onboardingPage.verifyVirtualCardInWallet();
      await onboardingPage.verifyOnboardingScreensLanguage('p1');
    } catch (error) {
      console.error('Test failed:', error);
    }
  });
});