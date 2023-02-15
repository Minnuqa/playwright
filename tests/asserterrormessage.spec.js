const{expect,test} = require('@playwright/test');

test('Confirm error message display when invalid username and password provided', async({page})=>{
    await page.goto('https://www.programsbuzz.com/');
    await page.locator('//i[@class = "fas fa-user"]').click();
    await page.locator('text = Log in').click();
    await page.locator('#edit-name').fill('invalid');
    await page.locator('#edit-pass').fill('invalid');
    await page.locator("(//input[@id='edit-submit'])[2]").click();
    await page.waitForLoadState("networkidle");
    const errormessage = page.locator('.messages--error');
    await page.waitForLoadState("networkidle");
    await expect(errormessage).toBeVisible;
    await expect(errormessage).toContainText('Unrecognized username or password.');
})