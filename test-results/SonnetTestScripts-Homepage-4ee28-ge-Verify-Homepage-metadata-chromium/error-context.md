# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SonnetTestScripts\Homepage\SonnetHomepage.test.ts >> Verify Homepage metadata
- Location: SonnetTestScripts\Homepage\SonnetHomepage.test.ts:25:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Premium White Label Digital Solutions for Agencies | Sonnet"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × unexpected value ""

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Hero Section Text Contents', async ({ page }) => {
  4  |     await page.goto('https://sonnet.digital/')
  5  |         const HeroTitle = await page.locator('h1')
  6  |         const HeroSubtitle = await page.locator('h3')
  7  |         await expect(HeroTitle).toContainText('Premium White Label Digital Solutions for Independent Agencies')
  8  |         await expect(HeroSubtitle).toContainText('Say yes to more work without adding headcount. We deliver under your brand – every time.')
  9  | });
  10 | 
  11 | test('Hero Section Button Explore Solutions', async ({ page }) => {
  12 |     await page.goto('https://sonnet.digital/')
  13 |     await expect(page.getByRole('link', { name: 'Explore Solutions', exact: true })).toBeVisible();
  14 |     await page.getByRole('link', { name: 'Explore Solutions', exact: true }).click();
  15 |     await expect(page).toHaveURL('https://sonnet.digital/#our-solutions')
  16 | });
  17 | 
  18 | test('Hero Section Button Why Agencies Choose Us', async ({ page }) => {
  19 |     await page.goto('https://sonnet.digital/')
  20 |     await expect(page.getByRole('link', { name: 'Why Agencies Choose Us', exact: true })).toBeVisible();
  21 |     await page.getByRole('link', { name: 'Why Agencies Choose Us', exact: true }).click();
  22 |     await expect(page).toHaveURL('https://sonnet.digital/why-dedicated-white-label-beats-agency-white-label/')
  23 | });
  24 | 
  25 | test('Verify Homepage metadata', async ({ page }) => {
> 26 |     await expect(page).toHaveTitle("Premium White Label Digital Solutions for Agencies | Sonnet");
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  27 |     const metaDescription = page.locator('meta[name="description"]');
  28 |     await expect(metaDescription).toContainText(
  29 |         'Sonnet Digital provides premium white label digital solutions for independent agencies. We help agencies scale their services without adding headcount.'
  30 |     );
  31 | });
  32 | 
  33 | 
```