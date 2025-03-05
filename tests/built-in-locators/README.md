# 🚀 Playwright Locator Methods Test

This test demonstrates various **Playwright locator strategies** to interact with elements on the OrangeHRM login page.

## 📌 Features

- ✅ **Locate Elements Using:**
  - 🔹 `getByPlaceholder()` → Fill username & password fields
  - 🔹 `getByRole()` → Click the login button
  - 🔹 `getByText()` → Verify user login
  - 🔹 `getByTitle()` → Retrieve page title

## 🛠 Run the Test

```sh
npx playwright test tests/built-in-locators/built-in-locators.spec.js --project chromium --headed
```
