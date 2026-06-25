import { test as base } from "./baseFixture";

export const test = base.extend({
  loggedIn: async ({ lgpage }, use) => {
    await lgpage.open();
    await lgpage.login("standard_user", "secret_sauce");
    await lgpage.verify_home_Page();
    await use();
  },
});
