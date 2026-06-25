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
/*Line 1
import { test as base } from "@playwright/test";

Playwright ka original test import kiya.

Uska naam base rakh diya.

Socho:

Original Playwright Test
          │
          ▼
        base
Line 2
import { loginpage } from "../pages/LoginPage";

LoginPage class import ki.

Yahi class hai na?

export class loginpage {
   ...
}
Line 3
export const test = base.extend({

Ye sabse important line hai.

Iska matlab:

"Playwright ke original test me ek naya fixture add kar raha hu."

Abhi tak Playwright deta tha

page
browser
context

Ab hum ek aur add kar rahe hain

lgpage

Ab Playwright ke paas ho gaya

page
browser
context
lgpage
Ye line
lgpage: async ({ page }, use) => {

Yaha hum lgpage naam ka fixture bana rahe hain.

Socho

Fixture Name
     │
     ▼
lgpage

Baad me test me ye naam use hoga.

test("Login", async ({ lgpage }) => {

});

Isi liye naam same hai.

Ye line
({ page }, use)

Yaha do cheeze milti hain.

1.
page

Playwright khud deta hai.

2.
use

Ye Playwright ka special function hai.

Iska kaam hai

"Jo object banega use test ko pass karna."

Ye line
const login = new loginpage(page);

Ye exactly wahi line hai jo tum pehle spec me likhte the.

Pehle

const login = new loginpage(page);

Spec file me thi.

Ab fixture me aa gayi.

Ye line
await use(login);

Sabse important.

Iska matlab

"Jo login object banaya hai usko test ko de do."

Internally Playwright aisa sochta hai.

const login = new loginpage(page);

↓

Test ko bhej do

↓

Naam kya hoga?

↓

lgpage

Isliye test me

async ({ lgpage })

milta hai.*/
