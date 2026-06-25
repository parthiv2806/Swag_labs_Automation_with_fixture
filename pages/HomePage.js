import { expect } from "@playwright/test";

export class Home_page {
  constructor(page) {
    this.page = page;
    this.burgermenubutton = page.locator("#react-burger-menu-btn");
    this.allitems = page.locator("#inventory_sidebar_link");
    this.about = page.locator("#about_sidebar_link");
    this.logout = page.locator("#logout_sidebar_link");
    this.resetappstate = page.locator("#reset_sidebar_link");
    this.burgermenuclose = page.locator("#react-burger-cross-btn");
    this.shopping = page.locator("#shopping_cart_container");
    this.continue_shooping = page.locator("#continue-shopping");
    this.dropdownfilter = page.locator('[data-test="product-sort-container"]');
    this.productNames = page.locator(".inventory_item_name");
    this.continues = page.locator("#continue-shopping");
    this.veripyproductmainpage = page.locator("#item_4_title_link");
    this.backtoproduct = page.locator("#back-to-products");
  }
  async Clikonthe_burgermenu_button() {
    await this.burgermenubutton.click();
  }

  async Verifythe_burgermenu_items() {
    await expect(this.burgermenubutton).toBeVisible();
    await expect(this.allitems).toBeVisible();
    await expect(this.about).toBeVisible();
    await expect(this.logout).toBeVisible();
    await expect(this.resetappstate).toBeVisible();
  }

  async Verify_urlof_about() {
    await this.about.click();
    await expect(this.page).toHaveURL("https://saucelabs.com/");
  }
  async Close_theBurgermenu() {
    await this.burgermenuclose.click();
  }
  async goBack() {
    await this.page.goBack();
  }
  async check_out_pagevisit() {
    await this.shopping.click();
    await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html");
    await this.continue_shooping.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html",
    );
  }
  async dropdown_logic(value) {
    await this.dropdownfilter.selectOption(value);
  }

  async verifySorting(order) {
    const actualNames = await this.productNames.allTextContents();

    let expectedNames = [...actualNames].sort();

    if (order === "za") {
      expectedNames.reverse();
    }
    expect(actualNames).toEqual(expectedNames);
  }

  async Redirect_tothecartpage() {
    await this.shopping.click();
    await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html");
    await this.continues.click();
  }

  async product_main_page_verify() {
    await this.veripyproductmainpage.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/inventory-item.html?id=4",
    );
  }
  async Backto_product() {
    await this.backtoproduct.click();
  }
  async openCart() {
    await this.shopping.click();
  }

  async continueShopping() {
    await this.continue_shooping.click();
  }

  async logout1() {
    await this.logout.click();
  }
}
