import { PlaywrightTestConfig, devices, } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    // testDir: 'sampleVisual/visual',
    testDir: 'SonnetTestScripts',
    // testDir: 'sampleClickTest',
    // reporter: [['line'], ['list'], ['html']],
    use: {
        headless: true,
        viewport: { width: 1920, height: 1080 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: false,
        video: 'off',
        screenshot: 'off',
        // video: 'retain-on-failure',
        // screenshot: 'only-on-failure',
    },
    projects: [
        // {
        //     name: 'chromium',
        //     use: { ...devices['Desktop Chrome'] },
        // },
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' },
        },
    ],
}

export default config