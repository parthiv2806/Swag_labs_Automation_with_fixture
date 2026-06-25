import { expect } from "@playwright/test";

export class Check_out {
  constructor(page) {
    this.page = page;
    this.checkout = page.locator("#checkout");
    this.errormessage = page.locator('[data-test="error"]');
    this.continue = page.locator("#continue");
    this.firstname = page.locator("#first-name");
    this.lastname = page.locator("#last-name");
    this.zipcode = page.locator("#postal-code");
    this.continue = page.locator("#continue");
    this.finish = page.locator("#finish");
    this.backtohome = page.locator("#back-to-products");
  }

  async checkoutpage() {
    await this.checkout.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html",
    );
  }
  async error_message(error) {
    await expect(this.errormessage).toHaveText(error);
  }
  async continue_button() {
    await this.continue.click();
  }

  async fillFirstName(firstName) {
    await this.firstname.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastname.fill(lastName);
  }

  async fillZipCode(zipCode) {
    await this.zipcode.fill(zipCode);
  }
  async continue_button() {
    await this.continue.click();
   
  }
  async Finish() {
    await this.finish.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html",
    );
  }
  async Backtohome() {
    await this.backtohome.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html",
    );
  }
}
