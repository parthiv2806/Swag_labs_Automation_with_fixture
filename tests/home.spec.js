import { test } from "../fixtures/authFixture";

test("Home_page_visiblity", async ({ loggedIn, Homepage }) => {


  await Homepage.Clikonthe_burgermenu_button();
  await Homepage.Verifythe_burgermenu_items();
  await Homepage.Verify_urlof_about();
  await Homepage.goBack();
  await Homepage.check_out_pagevisit();
  await Homepage.dropdown_logic("za");
  await Homepage.verifySorting("za");

  await Homepage.Redirect_tothecartpage();
  await Homepage.product_main_page_verify();
  await Homepage.Backto_product();
});
