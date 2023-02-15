const{test, expect} = require('@playwright/test');

test('Multiple filters', async({page})=>{
    await page.goto('https://www.akveo.com/ngx-admin/pages/tables/smart-table');
    await page.getByRole('img', { name: 'Material Light Theme' }).click();
    await page.locator('text=Tables & Data').click();
    await page.locator('text=Smart Table').click();
    await page.locator('table tr').filter({has:page.locator("th")}).filter({has:page.locator("i.nb-plus")}).click();
})

test('Multiple filters in table', async({page})=>{
    await page.goto('https://www.akveo.com/ngx-admin/pages/tables/smart-table');
    await page.getByRole('img', { name: 'Material Light Theme' }).click();
    await page.locator('text=Tables & Data').click();
    await page.locator('text=Smart Table').click();
    await page.locator('table tr').locator("th").filter({has:page.locator("i.nb-plus")}).click();
})