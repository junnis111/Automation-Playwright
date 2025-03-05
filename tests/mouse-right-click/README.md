# 🎭 Playwright Mouse Right-Click Test  

This Playwright test automates **right-click (context menu) actions** on a button.

## 📌 Features  
- ✅ Navigates to the **jQuery Context Menu Demo** page  
- ✅ Locates the `"Right Click Me"` button  
- ✅ Performs a **right-click** on the button  
- ✅ Waits for the context menu to appear  

## 📂 Test File  
**Folder:** `mouse-right-click/`  
**File:** `mouse-right-click.spec.js`  

## 🛠 Run the Test  
```sh
npx playwright test tests/mouse-right-click/mouse-right-click.spec.js --project chromium --headed
