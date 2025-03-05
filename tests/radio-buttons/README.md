# 🎭 Playwright Radio Buttons Test

This Playwright test script verifies the functionality of **radio buttons** on the webpage.

## 📌 Description

The test performs the following steps:

- Navigates to **testautomationpractice.blogspot.com**.
- Checks if the **male** radio button is **visible** and **editable**.
- Selects the **male** radio button and verifies that:
  - It is checked.
  - The **female** radio button remains unchecked.

## 📂 Test File

**Folder:** `radio-buttons/`  
**File:** `radio-buttons.spec.js`

## 🚀 Run the Test

Execute the test using the following command:

```sh
npx playwright test tests/radio-buttons/radio-buttons.spec.js --project chromium --headed
```
