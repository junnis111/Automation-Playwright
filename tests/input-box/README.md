# 🎭 Playwright Input Box Test  

This Playwright test automates interactions with an **input box** on the **Test Automation Practice** site.  

## 📌 Features  
- ✅ Navigates to the **Test Automation Practice** page  
- ✅ Verifies the input box is **visible, empty, enabled, and editable**  
- ✅ Fills the input box with `"Junaid"`  
- ✅ Pauses execution for **50 seconds**  

## 📂 Test File  
**Folder:** `input-box/`  
**File:** `input-box.spec.js`  

## 🛠 Run the Test  
```sh
npx playwright test tests/input-box/input-box.spec.js --project chromium --headed
