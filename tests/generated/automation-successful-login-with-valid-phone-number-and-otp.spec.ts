import { test, expect, Page } from '@playwright/test';

class AuthenticationPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://ice-city.uz/');
    await this.page.waitForLoadState('networkidle');
  }

  async enterPhoneNumber(phoneNumber: string) {
    const phoneInput = this.page.getByRole('textbox', { name: /phone/i }).or(
      this.page.getByPlaceholder(/phone|телефон/i)
    ).or(
      this.page.locator('input[type="tel"]')
    ).first();
    
    await phoneInput.waitFor({ state: 'visible', timeout: 10000 });
    await phoneInput.clear();
    await phoneInput.fill(phoneNumber);
    await this.page.waitForTimeout(500);
  }

  async clickContinueButton() {
    const continueButton = this.page.getByRole('button', { name: /continue|далее|next/i }).or(
      this.page.locator('button:has-text("Continue")').or(
        this.page.locator('button[type="submit"]')
      )
    ).first();
    
    await continueButton.waitFor({ state: 'visible', timeout: 10000 });
    await continueButton.click();
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle');
  }

  async isOTPPageDisplayed(): Promise<boolean> {
    const otpPage = this.page.getByText(/otp|verification|код|верификация/i).or(
      this.page.locator('input[type="text"][maxlength="4"]').or(
        this.page.locator('input[inputmode="numeric"]')
      )
    );
    
    await otpPage.waitFor({ state: 'visible', timeout: 10000 });
    return await otpPage.isVisible();
  }

  async verifyOTPInputDigits(expectedDigits: number) {
    const otpInput = this.page.locator('input[maxlength="4"]').or(
      this.page.locator('input[inputmode="numeric"]')
    ).first();
    
    await otpInput.waitFor({ state: 'visible', timeout: 10000 });
    const maxLength = await otpInput.getAttribute('maxlength');
    expect(maxLength).toBe(expectedDigits.toString());
  }

  async enterOTPCode(otpCode: string) {
    const otpInput = this.page.locator('input[maxlength="4"]').or(
      this.page.locator('input[inputmode="numeric"]')
    ).first();
    
    await otpInput.waitFor({ state: 'visible', timeout: 10000 });
    await otpInput.clear();
    await otpInput.fill(otpCode);
    await this.page.waitForTimeout(500);
  }

  async clickSubmitButton() {
    const submitButton = this.page.getByRole('button', { name: /submit|отправить|войти|login/i }).or(
      this.page.locator('button[type="submit"]')
    ).first();
    
    await submitButton.waitFor({ state: 'visible', timeout: 10000 });
    await submitButton.click();
    await this.page.waitForTimeout(500);
    await this.page.waitForLoadState('networkidle');
  }

  async isMainPageOpened(): Promise<boolean> {
    await this.page.waitForLoadState('networkidle');
    const url = this.page.url();
    return url.includes('ice-city.uz') && !url.includes('auth') && !url.includes('login');
  }
}

test.describe('Automation', () => {
  let authPage: AuthenticationPage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthenticationPage(page);
  });

  test('Successful login with valid phone number and OTP', async ({ page }) => {
    // Given the user opens the authentication page
    await authPage.navigate();

    // When the user enters phone number
    await authPage.enterPhoneNumber('998901234567');

    // And I click the continue button
    await authPage.clickContinueButton();

    // Then the OTP verification page should be displayed
    const isOTPPageVisible = await authPage.isOTPPageDisplayed();
    expect(isOTPPageVisible).toBeTruthy();

    // And the OTP input should contain 4 digits
    await authPage.verifyOTPInputDigits(4);

    // When the user enters OTP code
    await authPage.enterOTPCode('1234');

    // And I click the submit button
    await authPage.clickSubmitButton();

    // Then the main page should be opened successfully
    const isMainPageOpened = await authPage.isMainPageOpened();
    expect(isMainPageOpened).toBeTruthy();
  });
});