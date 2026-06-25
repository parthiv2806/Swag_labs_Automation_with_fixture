A scalable End-to-End Test Automation Framework built using Playwright and JavaScript, following the Page Object Model (POM) design pattern with Custom Fixtures for clean, reusable, and maintainable test execution.

📌 Project Overview

This framework automates the testing of web applications using Playwright. It is designed to be modular and easy to maintain by separating page objects, fixtures, and test cases.

✨ Features
Playwright with JavaScript
Page Object Model (POM)
Custom Playwright Fixtures
Reusable Page Objects
Cross-browser Testing
Headless & Headed Execution
HTML Test Reports
Screenshot Capture on Failure
Clean & Scalable Framework
📂 Project Structure
Automation_Project/
│
├── pages/                 # Page Object Classes
├── tests/                 # Test Cases
├── fixtures/              # Custom Playwright Fixtures
├── playwright.config.js   # Playwright Configuration
├── package.json
└── README.md
🧩 Framework Design

This framework follows the Page Object Model (POM) architecture.

Page locators and actions are maintained inside Page Object classes.
Test files contain only the test logic.
Custom Fixtures initialize page objects automatically before each test.
The framework is designed for better readability, maintainability, and scalability.
⚡ Custom Fixtures

Custom Fixtures are used to reduce code duplication by creating reusable page object instances.

Instead of manually creating page objects in every test, fixtures automatically provide them during test execution.

Example:

test("Login Test", async ({ loginPage, homePage }) => {
    await loginPage.login(username, password);
    await homePage.verifyHomePage();
});
Benefits
Cleaner test cases
Reusable page initialization
Less repetitive code
Easy maintenance
Better scalability
🧪 Test Coverage

The framework includes automation for:

Login Validation
Product Verification
Add to Cart
Remove Product
Cart Validation
Checkout Process
Error Message Validation
Product Sorting Validation
