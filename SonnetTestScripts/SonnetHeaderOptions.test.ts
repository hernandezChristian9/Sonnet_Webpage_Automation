import { test, expect } from '@playwright/test';

// test('simple basic test', async ({ page }) => {
//     await page.goto('https://sonnet.digital/')
//         const pageTitle = await page.locator('h1')
//         await expect(pageTitle).toContainText('Premium White Label Digital Solutions for Independent Agencies')
// });

test('Home Header Option Click', async ({ page }) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Home', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/')
});

test('Development Header Option Click', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Development', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Development', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/development/')
})

test('Development Header Option Hover Then Click all Header subitems', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await page.getByRole('link', { name: 'Development', exact: true }).hover();
    await expect(page.getByRole('link', { name: 'Corporate Website Development', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Corporate Website Development' }).click();
    await expect(page).toHaveURL('https://sonnet.digital/development/corporate-website-development/')
    await page.goBack();
    await page.getByRole('link', { name: 'Development', exact: true }).hover();
    await expect(page.getByRole('link', { name: 'Ecommerce', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Ecommerce', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/development/ecommerce/')
    await page.goBack();
    await page.getByRole('link', { name: 'Development', exact: true }).hover();
    await expect(page.getByRole('link', { name: 'Website Performance and Maintenance', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Website Performance and Maintenance', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/development/website-performance-and-maintenance/')
    await page.goBack();
    await page.getByRole('link', { name: 'Development', exact: true }).hover();
    await expect(page.getByRole('link', { name: 'Additional Development Solutions', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Additional Development Solutions', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/development/additional-development-solutions/')
})

test('Digital Marketing Header Option Hover Then Click all Header subitems', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await page.getByRole('link', { name: 'Digital Marketing', exact: true }).hover();
    await expect(page.getByRole('link', { name: 'SEO', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'SEO', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/digital-marketing/seo/')
    await page.goBack();
    await page.getByRole('link', { name: 'Digital Marketing', exact: true }).hover();
    await expect(page.getByRole('link', { name: 'Paid Media', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Paid Media', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/digital-marketing/paid-media/')
    await page.goBack();
    await page.getByRole('link', { name: 'Digital Marketing', exact: true }).hover();
    await expect(page.getByRole('link', { name: 'Social', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Social', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/digital-marketing/social/')
})

test('Creative Header Option Click', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Creative', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Creative', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/creative/')
})

test('About Us Header Option Click', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'About Us', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'About Us', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/about-us/')
})

test('The Edge Header Option Click', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'The Edge', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'The Edge', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/the-edge/')
})

test('Contact Us Button Header Option Click', async ({page}) => {
    await page.goto('https://sonnet.digital/')
    await expect(page.getByRole('link', { name: 'Contact Us', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Contact Us', exact: true }).click();
    await expect(page).toHaveURL('https://sonnet.digital/contact/')
})

