const{test, expect} = require('@playwright/test');
const{LoginPage} = require('../Pages/loginpage');

test('login page test', async ({page})=>{
    const login = new LoginPage(page);
    await login.goTosite();
    await login.login('test', 'test01');
})