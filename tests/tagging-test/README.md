# 🏷️ Playwright Test Tagging  

This Playwright script demonstrates **test tagging** using regex-based filtering in Playwright.  

## 📌 Description  
The script includes five test cases, each tagged with `@fast` or `@slow`:  
- **Fast tests:** Run quickly (`test-1`, `test-2`, `test-5`).  
- **Slow tests:** Simulate longer execution (`test-3`, `test-4`, `test-5`).  
- **Combined tags:** `test-5` has both `@fast` and `@slow`.  

## 📂 Test File  
**Folder:** `tagging-test/`  
**File:** `tagging-test.spec.js`  

## 🚀 Running Tagged Tests  

You can filter tests using `--grep` or `--grep-invert` flags:  

### 1️⃣ Run all tests with `@fast` OR `@slow`
```sh
npx playwright test tests/tagging-test/tagging-test.spec.js --project chromium --grep "@fast|@slow"
