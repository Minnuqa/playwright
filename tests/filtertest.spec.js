const{test, expect} = require('@playwright/test');

test('Filter by locator', async ({page})=>{
    await page.goto('https://www.programsbuzz.com/');
    await page.locator('ul.we-mega-menu-ul>li').filter({has: page.locator("a[href='/about-us-programsbuzz']")}).click();
})

test('Filter by text', async ({page})=>{
    await page.goto('https://www.programsbuzz.com/');
    await page.locator('ul.we-mega-menu-ul>li').filter({hasText:"About Us"}).click();
})