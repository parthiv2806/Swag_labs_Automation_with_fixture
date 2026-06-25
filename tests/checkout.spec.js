import { test } from "../fixtures/authFixture";
test("Checkout", async ({ loggedIn, Homepage, Cartpage, Checkout }) => {
  await Cartpage.addtocartb();
  await Homepage.openCart();
  await Checkout.checkoutpage();
  await Checkout.continue_button();
  await Checkout.error_message("Error: First Name is required");
});

test("Checkout 1", async ({ loggedIn, Homepage, Cartpage, Checkout }) => {
  await Cartpage.addtocartb();
  await Homepage.openCart();
  await Checkout.checkoutpage();
  await Checkout.fillFirstName("Parthiv");
  await Checkout.continue_button();
  await Checkout.error_message("Error: Last Name is required");
});

test("Checkout 2", async ({ loggedIn, Homepage, Cartpage, Checkout }) => {
  await Cartpage.addtocartb();
  await Homepage.openCart();
  await Checkout.checkoutpage();
  await Checkout.fillFirstName("Parthiv");
  await Checkout.fillLastName("Bhavsar");
  await Checkout.continue_button();
  await Checkout.error_message("Error: Postal Code is required");
});

test("Checkout 3", async ({ loggedIn, Homepage, Cartpage, Checkout }) => {
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
