import { test } from "../fixtures/authFixture";

test("Logout", async ({ loggedIn, Homepage, Logout }) => {
  await Homepage.Clikonthe_burgermenu_button();
  await Homepage.logout1();
});
