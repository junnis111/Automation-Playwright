# 🚀 Playwright Test Control Methods

This repository demonstrates how to control test execution using **skip, only, and slow** methods in Playwright.

## 📌 Features

- ✅ **Skip Tests**: Prevent specific tests from running
- ✅ **Conditional Skipping**: Skip tests based on browser type
- ✅ **Run Only Specific Tests**: Execute a single test with `test.only`
- ✅ **Slow Test Execution**: Extend test timeout for specific tests

## 🛠 Run the Tests

```sh
npx playwright test tests/annotations/annotations.spec.js --project chromium --headed
```
