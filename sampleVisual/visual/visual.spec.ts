import { test, expect } from '@playwright/test'

// test.describe('Visual Regression Testing Example', () => {
//     test('full page snapshot', async ({ page }) => {
//         // await page.goto("https://hemmatlawgrstg.wpenginepowered.com/legal-benefits-program-for-employees/")
//         await page.goto("https://hemmatlaw.com/")
//         await expect(await page).toHaveScreenshot('hp-win32.png')
//         await expect(await page.screenshot()).toMatchSnapshot('hp-win32.png'), {
//             fullscreen: true
//         }
//     })
// })


test('Full Page HP', async ({ page }) => {
    // await page.goto("https://hemmatlawgrstg.wpenginepowered.com/legal-benefits-program-for-employees/")
    await page.goto("https://hemmatlaw.com/")
    await page.evaluate(() => document.fonts.ready);
    // await expect(await page).toHaveScreenshot('hp.png'), {
    //     fullscreen: true
    // }
    await expect(await page.screenshot()).toMatchSnapshot('hp.png'), {
        fullscreen: true
    }
}) 