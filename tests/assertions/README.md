# 🚀 Playwright Assertions Test

This repository demonstrates various **Playwright assertions** to validate elements on a webpage.

## 📌 Features

- ✅ **URL Validation**: Ensure the correct page is loaded
- ✅ **Visibility Check**: Verify if an element is visible
- ✅ **Element State Checks**:
  - 🔹 `toBeEnabled()` → Ensure input fields are enabled
  - 🔹 `toBeChecked()` → Validate radio buttons and checkboxes

## 🛠 Run the Tests

```sh
npx playwright test tests/assertions/assertions.spec.js --project chromium --headed


```
