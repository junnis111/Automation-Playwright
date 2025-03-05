# 🔽 Playwright Dropdown Selection Test  

This test automates **dropdown selection and validation** on the Test Automation Practice website using Playwright.  

## 📌 Features  
- ✅ Select dropdown options using different methods:  
  - 🔹 By **visible text**  
  - 🔹 By **value attribute**  
  - 🔹 By **index**  
- ✅ Validate the number of options in the dropdown  
- ✅ Check if a specific option exists before selecting it  
- ✅ Uses **loops** to dynamically search for a dropdown value  

## 📂 Test File  
**Folder:** `drop-downs/`  
**File:** `drop-down.spec.js`  

## 🛠 Run the Test  
```sh
npx playwright test tests/drop-downs/drop-downs.spec.js --project chromium --headed
