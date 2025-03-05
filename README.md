# 🏆 Playwright Test Automation Suite  

This repository contains **end-to-end (E2E) UI test automation scripts** using **Playwright**. It includes various test scenarios for web applications like form interactions, UI validations, keyboard and mouse actions, file uploads, dropdowns, and more.  

## 📌 Project Overview  

This project aims to automate web UI testing using Playwright, a fast and reliable **browser automation** framework. The test scripts cover a range of functionalities to ensure seamless user interactions and interface validation.

## 🚀 Features  

✔ **Cross-Browser Testing** (Chromium, Firefox, WebKit)  
✔ **Keyboard & Mouse Actions** (hover, right-click, drag & drop)  
✔ **Form Validations** (input fields, radio buttons, checkboxes)  
✔ **Dropdown Handling** (single & multi-select)  
✔ **File Uploads & Screenshots**  
✔ **IFrame & Nested Frame Handling**  
✔ **Page Object Model (POM) for Maintainability**  
✔ **Soft & Hard Assertions**  
✔ **Test Tagging & Filtering**  

---

## 📚 Project Structure  

```
📺 Automation-Playwright  
 ┣ 📂 tests/  
 ┃ ┣ 📂 mouse-right-click/  
 ┃ ┃ ┣ mouse-right-click.spec.js  
 ┃ ┣ 📂 input-box/  
 ┃ ┃ ┣ input-box.spec.js  
 ┃ ┣ 📂 keyboard-actions/  
 ┃ ┃ ┣ keyboard-actions.spec.js  
 ┃ ┣ 📂 radio-buttons/  
 ┃ ┃ ┣ radio-buttons.spec.js  
 ┃ ┣ 📂 table/  
 ┃ ┃ ┣ table.spec.js  
 ┃ ┣ 📂 tagging-test/  
 ┃ ┃ ┣ tagging-test.spec.js  
 ┃ ┣ 📂 upload-files/  
 ┃ ┃ ┣ upload-files.spec.js  
 ┃ ┣ 📂 youtube/  
 ┃ ┃ ┣ youtube.spec.js  
 ┃ ┣ 📂 page-object-models/  
 ┃ ┃ ┣ page-object-models.spec.js  
 ┃ ┗ ... (more test cases)  
 ┣ 📂 pages/  
 ┃ ┣ login.js  
 ┃ ┣ homepage.js  
 ┣ 📂 tests/screenshots/ (For storing screenshots)  
 ┣ 📝 .gitignore  
 ┣ 📝 playwright.config.js  
 ┣ 📝 package.json  
 ┣ 📝 README.md  
 ┗ 📝 package-lock.json  
```

---

## 🛠️ Installation & Setup  

### 1️⃣ Install Playwright  
Ensure **Node.js (v16+)** is installed. Then, install Playwright and its dependencies:  
```sh
npm init playwright@latest
```
or  
```sh
npx playwright install
```

### 2️⃣ Clone the Repository  
```sh
git clone <https://github.com/junnis111/Automation-Playwright>
cd Automation-Playwright
npm install
```

### 3️⃣ Run Tests  
Run all tests:  
```sh
npx playwright test
```
Run tests in **headed mode** (see the UI interactions):  
```sh
npx playwright test --headed
```
Run a specific test file:  
```sh
npx playwright test tests/input-box/input-box.spec.js
```
Run tests on **specific browsers**:  
```sh
npx playwright test --project chromium  
npx playwright test --project firefox  
npx playwright test --project webkit  
```
Run tests with a **tag** (e.g., only `@fast` tests):  
```sh
npx playwright test --grep "@fast"
```

---

## 💡 Test Categories  

| Feature                | Test File Location |
|------------------------|--------------------|
| 🚀 Right Click | `tests/mouse-right-click/mouse-right-click.spec.js` |
| 🎹 Keyboard Actions | `tests/keyboard-actions/keyboard-actions.spec.js` |
| 📅 Input Box | `tests/input-box/input-box.spec.js` |
| 📌 Radio Buttons | `tests/radio-buttons/radio-buttons.spec.js` |
| 📚 Handling Tables | `tests/table/table.spec.js` |
| 🍿 Test Tagging | `tests/tagging-test/tagging-test.spec.js` |
| 📂 File Uploads | `tests/upload-files/upload-files.spec.js` |
| 🎥 YouTube Test | `tests/youtube/youtube.spec.js` |
| 📦 Page Object Model | `tests/page-object-models/page-object-models.spec.js` |

---

## 💪 Contributing  

🚀 **Want to improve this project?** Contributions are welcome!  

1. **Fork the repo**  
2. **Create a new branch** (`feature/improve-test`)  
3. **Make changes & commit**  
4. **Submit a pull request (PR)**  

---

## 📞 Support  

Have issues? **Create a GitHub issue** or contact me.  

📧 **Email:** junnis111@gmail.com


---