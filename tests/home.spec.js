import { expect } from "@playwright/test";
import { test } from "../fixtures/baseFixture";

test("Home_page_visiblity", async ({ lgpage, Homepage }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();

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
