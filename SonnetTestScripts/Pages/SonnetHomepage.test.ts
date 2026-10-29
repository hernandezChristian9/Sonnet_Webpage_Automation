import { test, expect } from '@playwright/test';
import { PageLocators } from '../PageLocators/PageLocators';
 
test.describe('Homepage', () => {
  let locators: PageLocators;
 
  test.beforeEach(async ({ page }) => {
    locators = new PageLocators(page);
    await locators.goto();
  });
 
  test('page has the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Premium White Label Digital Solutions for Agencies \| Sonnet/i);
  });
 
  test('hero section renders heading, subheading and CTAs', async () => {
    await expect(locators.heroHeading).toBeVisible();
    await expect(locators.heroSubheading).toBeVisible();
    await expect(locators.exploreSolutionsButton).toBeVisible();
    await expect(locators.whyAgenciesChooseUsLink).toBeVisible();
  });
 
  test('"Explore Solutions" scrolls to the Solutions section on the same page', async ({ page }) => {
    await locators.exploreSolutionsButton.click();
    await expect(page).toHaveURL('https://sonnet.digital/#solutions');
  });
 
  test('"Why agencies choose us" navigates to the dedicated article', async ({ page }) => {
    await locators.whyAgenciesChooseUsLink.click();
    await expect(page).toHaveURL(
      'https://sonnet.digital/why-dedicated-white-label-beats-agency-white-label/'
    );
  });
 
  test('"Challenges We Solve" section is present with Cost, Capacity, Capability', async ({ page }) => {
    await locators.challengesHeading.scrollIntoViewIfNeeded();
    await expect(locators.challengesHeading).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Cost', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capacity', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capability', exact: true })).toBeVisible();
  });
 
  test('"Our Solutions" section lists Development, Digital Marketing, Creative', async ({ page }) => {
    await locators.ourSolutionsHeading.scrollIntoViewIfNeeded();
    await expect(locators.ourSolutionsHeading).toBeVisible();
    await expect(page.getByText('Development', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Digital Marketing', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Creative', { exact: true }).first()).toBeVisible();
  });
 
  test('"Our Journey" section is visible', async () => {
    await locators.ourJourneyHeading.scrollIntoViewIfNeeded();
    await expect(locators.ourJourneyHeading).toBeVisible();
  });
 
  test('"Latest Articles" section lists article cards with working links', async ({ page }) => {
    await locators.latestArticlesHeading.scrollIntoViewIfNeeded();
    await expect(locators.latestArticlesHeading).toBeVisible();
 
    const articleLinks = page.locator('a[href*="/the-edge/"]', {
        hasText: 'Continue Reading',
    });

    await expect(articleLinks.first()).toBeVisible();
    expect(await articleLinks.count()).toBeGreaterThan(0);

    for (const link of await articleLinks.all()) {
        await expect(link).toHaveAttribute('href', /\/the-edge\/.+/);
    }
  });
 
  test('FAQs section is visible and expands an answer on click', async ({ page }) => {
    await locators.faqsHeading.scrollIntoViewIfNeeded();
    await expect(locators.faqsHeading).toBeVisible();
 
    const faqQuestion = page.getByText('What does Sonnet do for agencies?', { exact: false });
    await expect(faqQuestion).toBeVisible();
    await faqQuestion.click();
 
    const faqAnswer = page.getByText(/Sonnet is a white-label partner for independent agencies/i);
    await expect(faqAnswer).toBeVisible();
  });
 
  test('Newsletter signup section is visible', async () => {
    await locators.newsletterHeading.scrollIntoViewIfNeeded();
    await expect(locators.newsletterHeading).toBeVisible();
  });
 
  test('homepage has no obvious broken images above the fold', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
 
    // Spot-check the first few images actually loaded (naturalWidth > 0).
    const sampleSize = Math.min(count, 5);
    for (let i = 0; i < sampleSize; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth, `Image at index ${i} should have loaded`).toBeGreaterThan(0);
    }
  });
});
