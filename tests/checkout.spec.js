import { test } from "../fixtures/baseFixture";

test("Checkout", async ({ lgpage, Homepage, Cartpage, Checkout }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();

  await Cartpage.addtocartb();
  await Homepage.openCart();
  await Checkout.checkoutpage();
  await Checkout.continue_button();
  await Checkout.error_message("Error: First Name is required");
});

test("Checkout 1", async ({ lgpage, Homepage, Cartpage, Checkout }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();

  await Cartpage.addtocartb();
  await Homepage.openCart();
  await Checkout.checkoutpage();
  await Checkout.fillFirstName("Parthiv");
  await Checkout.continue_button();
  await Checkout.error_message("Error: Last Name is required");
});

test("Checkout 2", async ({ lgpage, Homepage, Cartpage, Checkout }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();

  await Cartpage.addtocartb();
  await Homepage.openCart();
  await Checkout.checkoutpage();
  await Checkout.fillFirstName("Parthiv");
  await Checkout.fillLastName("Bhavsar");
  await Checkout.continue_button();
  await Checkout.error_message("Error: Postal Code is required");
});

test("Checkout 3", async ({ lgpage, Homepage, Cartpage, Checkout }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();

  await Cartpage.addtocartb();
  await Homepage.openCart();
  await Checkout.checkoutpage();
  await Checkout.fillFirstName("Parthiv");
  await Checkout.fillLastName("Bhavsar");
  await Checkout.fillZipCode("2345");
  await Checkout.continue_button();
  await Checkout.Finish();
  await Checkout.Backtohome();
});
