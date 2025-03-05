# 🎭 Playwright Basic Tests  

This test suite automates **basic webpage interactions** on the Playwright documentation site.  

## 📌 Features  
- ✅ **Verify page title** contains "Playwright"  
- ✅ **Click on the "Get Started" link** and navigate  
- ✅ **Check if the "Installation" heading** is visible  

## 📂 Test File  
**Folder:** `example-tests/`  
**File:** `example.spec.js`  

## 🛠 Run the Test  
```sh
npx playwright test tests/example/example.spec.js --project chromium --headed
