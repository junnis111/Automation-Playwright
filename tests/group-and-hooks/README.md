# 🎭 Playwright Group & Hooks Test  

This test suite demonstrates how to use **hooks** and **grouped tests** in Playwright.  

## 📌 Features  
- ✅ **beforeAll**: Runs once before all tests  
- ✅ **beforeEach**: Runs before each test  
- ✅ **afterEach**: Runs after each test  
- ✅ **afterAll**: Runs once after all tests  
- ✅ **test.describe()**: Groups related tests together  

## 📂 Test File  
**Folder:** `group-and-hooks/`  
**File:** `group-and-hooks.spec.js`  

## 🛠 Run the Test  
```sh
npx playwright test tests/group-and-hooks/group-and-hooks.spec.js --project chromium --headed
