import { expect } from "@playwright/test";

export class Cart {
  constructor(page) {
    this.page = page;
    this.addtocartbutton = page.locator("#add-to-cart-sauce-labs-backpack");
    this.removebutton = page.locator("#remove-sauce-labs-backpack");
    this.detailpageremove = page.locator("#remove");
    this.detailaddtocartpage = page.locator("#add-to-cart");
    this.productnmae = page.locator("#item_4_title_link");
    this.removebackpack = page.locator("#remove-sauce-labs-backpack");
    this.bedge = page.locator(".shopping_cart_badge");
  }

  async addtocartb() {
    await this.addtocartbutton.click();
  }
  async verifytheremovebuttonisvisible() {
    await expect(this.removebutton).toBeVisible("Remove"); //Agar locator constructor me initialize kiya hai, to methods me this.locatorName use karenge. Agar locator constructor me initialize nahi kiya hai, to methods ke andar this.page.locator() use karke locator banana padega.
  }

  async verifydetailpageremovebutton() {
    await expect(this.detailpageremove).toBeVisible("Remove");
  }
  async addtocartondetailpage() {
    await this.detailpageremove.click();
    await expect(this.detailaddtocartpage).toBeVisible("Add to cart");
  }

  async verifytheaddtocartbutton() {
    await expect(this.addtocartbutton).toBeVisible("Add to cart");
  }

  async getProductName() {
    return await this.productnmae.textContent();
  }
  async verfytheproduct(productName) {
    await expect(this.productnmae).toHaveText(productName); //this.productnmae ➜ Kis element ko verify karna hai (Locator / Actual)
    //productName ➜ Us element me kya text hona chahiye (Expected)
  }

  async removeproduct() {
    await this.removebackpack.click();
  }

  async verifythebedge() {
    await expect(this.bedge).toHaveCount(1);
  }

  async verifyremovebedge() {
    await expect(this.bedge).toHaveCount(0);
  }

  async removeButton() {
    await this.removebutton.click();
  }
}
