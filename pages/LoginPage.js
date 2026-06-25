import { expect } from "@playwright/test";

export class loginpage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
    this.errormessage = page.locator('[data-test="error"]');
  }
  async open() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
  async verify_home_Page() {
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html",
    );
  }
  async login2(user) {
    await this.username.fill(user);
    await this.loginBtn.click();
  }

  async login3(pass) {
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
  async login4() {
    await this.loginBtn.click();
  }
  async verifythe_error_message(experrormessage) {
    await expect(this.errormessage).toHaveText(experrormessage);
  }

}
