const { test, expect } = require('@playwright/test');

test('click footer menu', async ({ page }) => {
    await page.goto('https://www.programsbuzz.com/');
    await page.locator('.region-footer-bottom-second ul.menu>li>>nth=-2').click();
})