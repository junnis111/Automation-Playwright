# 🎭 Playwright Keyboard Actions Test  

This Playwright test automates **keyboard interactions** on the **GoTranscript Text Compare** tool.  

## 📌 Features  
- ✅ Navigates to the **GoTranscript Text Compare** page  
- ✅ Enters the text `"My name is Junaid Khan"` in the first textarea  
- ✅ Uses **keyboard shortcuts**:
  - `Ctrl + A` → **Selects all text**
  - `Ctrl + C` → **Copies the text**
  - `Tab` → **Switches focus to the next textarea**
  - `Ctrl + V` → **Pastes the copied text**  
- ✅ Waits for **5 seconds** before finishing  

## 📂 Test File  
**Folder:** `keyboard-actions/`  
**File:** `keyboard-actions.spec.js`  

## 🛠 Run the Test  
```sh
npx playwright test tests/keyboard-actions/keyboard-actions.spec.js --project chromium --headed
