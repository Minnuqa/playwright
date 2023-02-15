const { expect, test } = require('@playwright/test');

test('Go to programbuzz page', async ({ page }) => {
    await page.goto('https://www.programsbuzz.com/');
    await page.locator('//i[@class = "fas fa-search"]').click();
    await page.locator('#edit-keys').type('cypress');
    await page.locator('#edit-actions').click();
    await page.waitForLoadState('networkidle');
    const titles = await page.locator('h3').allTextContents()
    console.log(titles)
});
