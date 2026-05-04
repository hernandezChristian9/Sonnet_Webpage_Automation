import { test, expect } from '@playwright/test';

test('Logo Click Redirection', async ({ page }) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.locator('#page-footer')).toBeVisible();
    await page.locator('#page-footer').getByRole('link').first().click();
    await expect(page).toHaveURL('https://sonnet.digital/')
});

test('Privacy Policy Footer Option Click', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Privacy Policy', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Privacy Policy', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/privacy-policy/')
})

test('Modern Slavery Statement Footer Option Click', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Modern Slavery Statement', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Modern Slavery Statement', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/modern-slavery-statement/')
})