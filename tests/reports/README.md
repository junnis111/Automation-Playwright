# 📊 Playwright Test Reports

## 📌 Description

This Playwright test script demonstrates different **built-in test reporters** to generate test execution reports.

## 📂 Test File

**Folder:** `tests/reports/`  
**File:** `reports.spec.js`

## 🚀 Running Tests

Navigate to the project directory and execute the following commands to run tests with different reporters.

### **1️⃣ Default List Reporter**

```sh
npx playwright test tests/reports/reports.spec.js --reporter=list
```

### **2️⃣ HTML Reporter**

```sh
npx playwright test tests/reports/reports.spec.js --reporter=html
```

To open the generated report:

```sh
npx playwright show-report
```

### **3️⃣ JSON Reporter**

```sh
npx playwright test tests/reports/reports.spec.js --reporter=json > report.json
```

### **4️⃣ JUnit XML Reporter**

```sh
npx playwright test tests/reports/reports.spec.js --reporter=junit > report.xml
```

### **5️⃣ Dot Reporter**

```sh
npx playwright test tests/reports/reports.spec.js --reporter=dot
```

### **6️⃣ Line Reporter**

```sh
npx playwright test tests/reports/reports.spec.js --reporter=line
```

## 📢 Troubleshooting

### **Check Playwright Version**

```sh
npx playwright --version
```

### **Reinstall Playwright and Browsers**

```sh
npx playwright install --with-deps
```

## 📜 License

This project is licensed under the MIT License.

---
