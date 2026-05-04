import { test, expect } from '@playwright/test';

test('Hero Section Text Contents', async ({ page }) => {
    await page.goto('https://sonnet.digital/')
        const HeroTitle = await page.locator('h1')
        const HeroSubtitle = await page.locator('h3')
        await expect(HeroTitle).toContainText('Premium White Label Digital Solutions for Independent Agencies')
        await expect(HeroSubtitle).toContainText('Say yes to more work without adding headcount. We deliver under your brand – every time.')
});

test('Hero Section Button Explore Solutions', async ({ page }) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Explore Solutions', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Explore Solutions', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/#our-solutions')
});

test('Hero Section Button Why Agencies Choose Us', async ({ page }) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Why Agencies Choose Us', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Why Agencies Choose Us', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/why-dedicated-white-label-beats-agency-white-label/')
});

test('Verify Homepage metadata', async ({ page }) => {
    await expect(page).toHaveTitle("Premium White Label Digital Solutions for Agencies | Sonnet");
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toContainText(
        'Sonnet Digital provides premium white label digital solutions for independent agencies. We help agencies scale their services without adding headcount.'
    );
});

