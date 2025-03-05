# ✅ Playwright Soft Assertions Test  

This Playwright test script demonstrates **soft assertions**, which allow multiple checks to continue even if one fails.

## 📌 Description  
The test performs the following actions:  
- Navigates to **YouTube**.  
- Uses **soft assertions** (`expect.soft`) to check:  
  - Page **title**.  
  - Page **URL**.  
  - Visibility of the **YouTube logo**.  

## 📂 Test File  
**Folder:** `soft-assertions/`  
**File:** `soft-assertions.spec.js`  

## 🚀 Run the Test  
To execute the test, use:

```sh
npx playwright test tests/soft-assertions/soft-assertions.spec.js --project chromium --headed
