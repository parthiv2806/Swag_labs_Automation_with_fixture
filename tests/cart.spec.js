import { test } from "../fixtures/baseFixture";


test("cart", async ({ lgpage, Homepage, Cartpage }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();

  await Cartpage.addtocartb();
  await Cartpage.verifytheremovebuttonisvisible();
  await Homepage.product_main_page_verify();
  await Cartpage.verifydetailpageremovebutton();
  await Cartpage.addtocartondetailpage();

  await Homepage.Backto_product();

  await Cartpage.verifytheaddtocartbutton();
  const product = await Cartpage.getProductName();

  await Cartpage.addtocartb();
  await Homepage.openCart();

  await Cartpage.verfytheproduct(product);

  await Cartpage.removeproduct();
  await Homepage.continueShopping();

  await Cartpage.addtocartb();
  await Cartpage.verifythebedge();
  await Cartpage.removeButton();
  await Cartpage.verifyremovebedge();
});
