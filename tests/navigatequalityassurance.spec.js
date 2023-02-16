const { test, expect } = require('@playwright/test');

test('Go to tutorial quality Assurance', async ({ page }) => {
    await page.goto('https://www.programsbuzz.com/');
    await page.locator('#block-mainnavigation').getByRole('link', { name: 'Tutorials' }).click();
    await page.locator('#block-mainnavigation').getByRole('link', { name: 'Quality Assurance' }).click();
    await page.waitForLoadState('load');
    await expect(page).toHaveTitle("Quality Assurance Tutorials");
})
