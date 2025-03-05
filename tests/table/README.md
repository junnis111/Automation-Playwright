# 📊 Playwright Table Handling Test

This Playwright test script demonstrates **table interactions**, including:

- Counting **rows and columns** in a table.
- **Selecting checkboxes** dynamically based on product names.
- **Paginating** through table pages.
- Extracting and printing **cell values**.

## 📌 Description

The test performs the following actions:  
1️⃣ Navigates to `https://testautomationpractice.blogspot.com/`.  
2️⃣ Locates the **table** and counts its **rows** and **columns**.  
3️⃣ Selects a **checkbox** for a specific product (e.g., "Smartwatch").  
4️⃣ Iterates through **pagination** and extracts all cell data.

## 📂 Test File

**Folder:** `table/`  
**File:** `table.spec.js`

## 🚀 Run the Test

To execute the test, use:

```sh
npx playwright test tests/table/table.spec.js --project chromium --headed
```
