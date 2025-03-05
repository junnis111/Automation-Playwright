# 🎭 Playwright Inner Frames Test  

This Playwright test automates interactions with **nested frames (inner frames)** on the **UI Vision demo site**.  

## 📌 Features  
- ✅ Navigates to the **UI Vision Frames Demo**  
- ✅ Fills an input field inside **Frame 3**  
- ✅ Accesses and interacts with a **child frame**  
- ✅ Checks a checkbox inside the child frame  

## 📂 Test File  
**Folder:** `inner-frames/`  
**File:** `inner-frames.spec.js`  

## 🛠 Run the Test  
```sh
npx playwright test tests/inner-frames/inner-frames.spec.js --project chromium --headed
