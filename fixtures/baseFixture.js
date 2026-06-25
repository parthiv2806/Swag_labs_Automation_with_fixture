import { test as base } from "@playwright/test";
import { loginpage } from "../pages/LoginPage";
import { Home_page } from "../pages/HomePage";
import { Cart } from "../pages/Cartpage";
import { Check_out } from "../pages/Checkout";
import { Log_out } from "../pages/Logout";
// export const test = base.extend({
// lgpage: async ({ page }, use) => {
//     const login = new loginpage(page);
//     await use(login);
// },  ye aek ke liye banaya hai
// });

export const test = base.extend({
  lgpage: async ({ page }, use) => {
    const login = new loginpage(page);
    await use(login);
  },

  Homepage: async ({ page }, use) => {
    const home = new Home_page(page);
    await use(home);
  },

  Cartpage: async ({ page }, use) => {
    const cart = new Cart(page);
    await use(cart);
  },
  Checkout: async ({ page }, use) => {
    const checkout = new Check_out(page);
    await use(checkout);
  },
   Logout: async ({ page }, use) => {
    const logout = new Check_out(page);
    await use(logout);
  },
});

