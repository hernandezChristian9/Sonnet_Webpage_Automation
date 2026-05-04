import { PlaywrightTestConfig, devices, } from '@playwright/test'
// import * as os from "node:os";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    // testDir: 'sampleVisual/visual',
    testDir: 'SonnetTestScripts',
    reporter: [
        ['line'],
        [
            'allure-playwright',
            {
                links: {
                    issue: {
                        nameTemplate: "Issue #%s",
                        urlTemplate: "https://issues.example.com/%s",
                    },
                    tms: {
                        nameTemplate: "TMS #%s",
                        urlTemplate: "https://tms.example.com/%s",
                    },
                },
                environmentInfo: {
                    // os_platform: os.platform(),
                    // os_release: os.release(),
                    // os_version: os.version(),
                    // node_version: process.version,
                },
            }
        ], 
        ['list'], 
        ['html'],
        ['./reporters/custom-reporter.ts'],
    ],
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
    reportSlowTests: {
        max: 5,
        threshold: 15000
    },
    outputDir: 'test-results/',
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
        },
    ],
}

export default config