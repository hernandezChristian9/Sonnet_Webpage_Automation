import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sonnet.digital/');
  await page.locator('svg').first().click();
  await page.getByRole('heading', { name: 'Cost', exact: true }).click();
  await page.getByText('High labour costs impact').click();
  await page.getByText('Capacity Managing fluctuating').click();
  await page.getByRole('heading', { name: 'Capacity' }).click();
  await page.getByText('Managing fluctuating project').click();
  await page.getByText('Capability Small teams').click();
  await page.getByRole('heading', { name: 'Capability' }).click();
  await page.getByText('Small teams struggle to meet').click();
});