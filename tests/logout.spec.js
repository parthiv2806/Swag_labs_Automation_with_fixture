import { test } from "../fixtures/baseFixture";

test("Logout", async ({ lgpage, Homepage, Logout }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();

  await Homepage.Clikonthe_burgermenu_button();
  await Homepage.logout1();
});
