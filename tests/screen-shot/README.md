# 📸 Playwright Screenshot Test

This Playwright test script captures **screenshots** of different elements and pages.

## 📌 Description

The test performs the following actions:

- Navigates to **testautomationpractice.blogspot.com**.
- Captures a **screenshot** of a specific element.
- Saves the screenshot with a **timestamp** for unique naming.

## 📂 Test File

**Folder:** `screen-shot/`  
**File:** `screen-shot.spec.js`

## 🚀 Run the Test

To execute the test, run the following command:

```sh
npx playwright test tests/screen-shot/screen-shot.spec.js --project chromium --headed
```
