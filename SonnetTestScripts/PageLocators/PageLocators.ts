import { Page, Locator } from '@playwright/test';
 
/**
 * Page Object for https://sonnet.digital/
 * Groups locators for the header (nav), footer, and homepage body content.
 */
export class PageLocators {
  readonly page: Page;
 
  // Header
  readonly header: Locator;
  readonly headerLogo: Locator;
  readonly headerLogoLink: Locator;
  readonly navHomeLink: Locator;
  readonly navDevelopmentLink: Locator;
  readonly navDigitalMarketingLink: Locator;
  readonly navCreativeLink: Locator;
  readonly navAboutUsLink: Locator;
  readonly navTheEdgeLink: Locator;
  readonly navContactUsLink: Locator;
 
  // Hero / homepage body
  readonly heroHeading: Locator;
  readonly heroSubheading: Locator;
  readonly exploreSolutionsButton: Locator;
  readonly whyAgenciesChooseUsLink: Locator;
  readonly challengesHeading: Locator;
  readonly ourSolutionsHeading: Locator;
  readonly ourJourneyHeading: Locator;
  readonly latestArticlesHeading: Locator;
  readonly faqsHeading: Locator;
  readonly newsletterHeading: Locator;
  readonly newsletterSubscribeButton: Locator;
 
  // Footer
  readonly footer: Locator;
  readonly footerLogo: Locator;
  readonly footerLogoLink: Locator;
  readonly footerPrivacyPolicyLink: Locator;
  readonly footerModernSlaveryLink: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    // Header
    this.header = page.locator('header');
    this.headerLogoLink = this.header.locator('a:has(img)').first();
    this.headerLogo = this.headerLogoLink.locator('img');
    this.navHomeLink = this.header.getByRole('link', { name: 'Home', exact: true });
    this.navDevelopmentLink = this.header.getByRole('link', { name: 'Development', exact: true });
    this.navDigitalMarketingLink = this.header.getByRole('link', { name: 'Digital Marketing', exact: true });
    this.navCreativeLink = this.header.getByRole('link', { name: 'Creative', exact: true });
    this.navAboutUsLink = this.header.getByRole('link', { name: 'About Us', exact: true });
    this.navTheEdgeLink = this.header.getByRole('link', { name: 'The Edge', exact: true });
    this.navContactUsLink = this.header.getByRole('link', { name: 'Contact Us', exact: true });
 
    // Hero / homepage body
    this.heroHeading = page.getByRole('heading', {
      name: /Premium White Label Digital Solutions for Independent Agencies/i,
    });
    this.heroSubheading = page.getByText(/Say yes to more work without adding headcount/i);
    this.exploreSolutionsButton = page.getByRole('link', { name: /Explore Solutions/i });
    this.whyAgenciesChooseUsLink = page.getByRole('link', { name: /Why agencies choose us/i });
    this.challengesHeading = page.getByRole('heading', { name: /Challenges We Solve/i });
    this.ourSolutionsHeading = page.getByRole('heading', { name: /Our Solutions/i });
    this.ourJourneyHeading = page.getByRole('heading', { name: /Our Journey/i });
    this.latestArticlesHeading = page.getByRole('heading', { name: /Latest Articles/i });
    this.faqsHeading = page.getByRole('heading', { name: /FAQs/i });
    this.newsletterHeading = page.getByRole('heading', { name: /Join the Edge Newsletter/i });
    this.newsletterSubscribeButton = page.getByRole('button', { name: /Subscribe/i });
 
    // Footer
    this.footer = page.locator('footer');
    this.footerLogoLink = this.footer.locator('a:has(img)').first();
    this.footerLogo = this.footerLogoLink.locator('img');
    this.footerPrivacyPolicyLink = this.footer.getByRole('link', { name: /Privacy Policy/i });
    this.footerModernSlaveryLink = this.footer.getByRole('link', { name: /Modern Slavery Statement/i });
  }
 
  async goto() {
    await this.page.goto('https://sonnet.digital/');
  }
}