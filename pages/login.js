class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginlink = "#login2";
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.loginButton = "//button[normalize-space()='Log in']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/");
  }

  async login(username, password) {
    await this.page.locator(this.loginlink).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}

module.exports = LoginPage;
