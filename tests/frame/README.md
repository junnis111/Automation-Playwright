# 🎭 Playwright Frame Handling Test

This test suite demonstrates how to **interact with iframes** using Playwright.

## 📌 Features

- ✅ **Navigate to the frames demo page**
- ✅ **Count and log the total number of frames**
- ✅ **Interact with an iframe using two methods:**
  - 🔹 **Method 1:** Using `frameLocator()`
  - 🔹 **Method 2:** Using `page.frame()`
- ✅ **Fill an input field inside the frame**

## 📂 Test File

**Folder:** `frame/`  
**File:** `frame.spec.js`

## 🛠 Run the Test

```sh
npx playwright test tests/frame/frame.spec.js --project chromium --headed
```
