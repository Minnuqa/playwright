class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator('#edit-name');
        this.passWord = page.locator('#edit-pass');
        this.clickLogin = page.locator('//form[@id="user-login-form"]//input[@id="edit-submit"]');
    }
    async goTosite() {
        await this.page.goto('https://www.programsbuzz.com/user/login');
    }
    async login(username, pass) {
        await this.userName.fill(username);
        await this.passWord.fill(pass);
        await this.clickLogin.click();

    }
}
module.exports = { LoginPage };