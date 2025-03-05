# 🎭 Playwright Facebook Radio Button Test

This test suite automates **radio button selection and validation** on Facebook's sign-up page using Playwright.

## 📌 Features

- ✅ **Navigate to Facebook's Sign-Up Page**
- ✅ **Verify URL and Page Title**
- ✅ **Click and validate the "Female" radio button:**
  - 🔹 Check if it's **visible**
  - 🔹 Check if it's **checked**
  - 🔹 Check if it's **enabled**
  - 🔹 Check if it's **editable**
- ✅ **Click on the "Custom" radio button**

## 📂 Test File

**Folder:** `fb-radio-buttons/`  
**File:** `fb-radio-buttons.spec.js`

## 🛠 Run the Test

```sh
npx playwright test tests/fb-radio-buttons/fb-radio-buttons.spec.js --project chromium --headed
```
