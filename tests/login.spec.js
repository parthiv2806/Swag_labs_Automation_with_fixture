import { expect } from "@playwright/test";
import { test } from "../fixtures/baseFixture";

test("Login", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login("standard_user", "secret_sauce");
  await lgpage.verify_home_Page();
});

test("Login with only id and  password blank", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login2("standard_user");
  await lgpage.verifythe_error_message("Epic sadface: Password is required");
});

test("Login with password id is blank", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login3("1234");
  await lgpage.verifythe_error_message("Epic sadface: Username is required");
});

test("username and password both field are blank", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login4();
  await lgpage.verifythe_error_message("Epic sadface: Username is required");
});

test("Login for the lock user", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login("locked_out_user", "secret_sauce");
  await lgpage.verifythe_error_message(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});

test("Login_problem_user", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login("problem_user", "secret_sauce");
  await lgpage.verify_home_Page();
});

test("Login_performance_glitch_user", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login("performance_glitch_user", "secret_sauce");
  await lgpage.verify_home_Page();
});

test("error_user", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login("performance_glitch_user", "secret_sauce");
  await lgpage.verify_home_Page();
});

test("visual_user", async ({ lgpage }) => {
  await lgpage.open();
  await lgpage.login("visual_user", "secret_sauce");
  await lgpage.verify_home_Page();
});
