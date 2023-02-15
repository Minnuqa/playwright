const {expect, test} = require('@playwright/test');

test('Create new account', async ({page})=>{
    await page.goto('https://www.programsbuzz.com/');
    await page.locator('.header__toggleable-account-menu').click();
    await page.locator('text=Log in').click();
    await page.locator('.region-content-administration').getByRole('link', {name: 'Create new account'}).click();
    await page.locator('#edit-mail').fill('minnu.kurian99@gmail.com');
    await page.locator('#edit-name').fill('minnukue');
   // await page.getByLabel('Profile Picture').click();
   await page.locator('text = Profile Picture').setInputFiles('data/daylily-flower-and-buds-sharp.jpeg')
})