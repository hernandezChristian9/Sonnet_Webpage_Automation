import { test, expect } from '@playwright/test';
import { PageLocators } from '../PageLocators/PageLocators';

test.describe('Footer', () => {
  let locators: PageLocators;
 
  test.beforeEach(async ({ page }) => {
    locators = new PageLocators(page);
    await locators.goto();
    await locators.footer.scrollIntoViewIfNeeded();
  });
 
  test('footer is visible', async () => {
    await expect(locators.footer).toBeVisible();
  });
 
  test('footer logo is visible and links to the homepage', async () => {
    await expect(locators.footerLogo).toBeVisible();
    await expect(locators.footerLogoLink).toHaveAttribute('href', 'https://sonnet.digital');
  });
 
  test('Privacy Policy link is visible and points to the right URL', async () => {
    await expect(locators.footerPrivacyPolicyLink).toBeVisible();
    await expect(locators.footerPrivacyPolicyLink).toHaveAttribute(
      'href',
      'https://sonnet.digital/privacy-policy/'
    );
  });
 
  test('Modern Slavery Statement link is visible and points to the right URL', async () => {
    await expect(locators.footerModernSlaveryLink).toBeVisible();
    await expect(locators.footerModernSlaveryLink).toHaveAttribute(
      'href',
      'https://sonnet.digital/modern-slavery-statement/'
    );
  });
 
  test('clicking Privacy Policy navigates correctly', async ({ page }) => {
    await locators.footerPrivacyPolicyLink.click();
    await expect(page).toHaveURL('https://sonnet.digital/privacy-policy/');
  });
 
  test('clicking Modern Slavery Statement navigates correctly', async ({ page }) => {
    await locators.footerModernSlaveryLink.click();
    await expect(page).toHaveURL('https://sonnet.digital/modern-slavery-statement/');
  });
 
  test('footer has no obviously broken (empty) links', async () => {
    const links = locators.footer.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href, `Link at index ${i} should have a non-empty href`).toBeTruthy();
    }
  });
});