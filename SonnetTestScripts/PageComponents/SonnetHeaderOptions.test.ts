import { test, expect } from '@playwright/test';
import { PageLocators } from '../PageLocators/PageLocators';
 
test.describe('Header', () => {
  let locators: PageLocators;

  test.beforeEach(async ({ page }) => {
    locators = new PageLocators(page);
    await locators.goto();
  });
 
  test('header is visible', async () => {
    await expect(locators.header).toBeVisible();
  });
 
  test('logo is visible and links back to homepage', async () => {
    await expect(locators.headerLogo).toBeVisible();
    await expect(locators.headerLogoLink).toHaveAttribute('href', 'https://sonnet.digital');
  });
 
  test('all top-level nav links are visible', async () => {
    await expect(locators.navHomeLink).toBeVisible();
    await expect(locators.navDevelopmentLink).toBeVisible();
    await expect(locators.navDigitalMarketingLink).toBeVisible();
    await expect(locators.navCreativeLink).toBeVisible();
    await expect(locators.navAboutUsLink).toBeVisible();
    await expect(locators.navTheEdgeLink).toBeVisible();
    await expect(locators.navContactUsLink).toBeVisible();
  });
 
  test('nav links point to the expected URLs', async () => {
    await expect(locators.navHomeLink).toHaveAttribute('href', 'https://sonnet.digital/');
    await expect(locators.navDevelopmentLink).toHaveAttribute('href', 'https://sonnet.digital/development/');
    await expect(locators.navDigitalMarketingLink).toHaveAttribute('href', 'https://sonnet.digital/digital-marketing/');
    await expect(locators.navCreativeLink).toHaveAttribute('href', 'https://sonnet.digital/creative/');
    await expect(locators.navAboutUsLink).toHaveAttribute('href', 'https://sonnet.digital/about-us/');
    await expect(locators.navTheEdgeLink).toHaveAttribute('href', 'https://sonnet.digital/the-edge/');
    await expect(locators.navContactUsLink).toHaveAttribute('href', '/contact');
    // await expect(locators.navContactUsLink).toHaveAttribute('href', 'https://sonnet.digital/contact');
  });
 
  test('clicking "Development" navigates to the Development page', async ({ page }) => {
    await locators.navDevelopmentLink.click();
    await expect(page).toHaveURL('https://sonnet.digital/development/');
  });
 
  test('clicking "Contact Us" navigates to the contact page', async ({ page }) => {
    await locators.navContactUsLink.click();
    await expect(page).toHaveURL('https://sonnet.digital/contact');
  });
 
  test('Development dropdown reveals sub-links on hover', async () => {
    await locators.navDevelopmentLink.hover();
    const subLink = locators.header.getByRole('link', { name: 'Corporate Website Development' });
    await expect(subLink).toBeVisible();
    await expect(subLink).toHaveAttribute(
      'href',
      'https://sonnet.digital/development/corporate-website-development/'
    );
  });
 
  test('header remains visible/sticky when scrolling down the homepage', async ({ page }) => {
    await page.mouse.wheel(0, 1500);
    await expect(locators.header).toBeVisible();
  });
});