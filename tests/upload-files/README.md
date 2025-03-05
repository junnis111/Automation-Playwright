# 📂 Playwright File Upload Testing

This Playwright script tests **single and multiple file uploads** on a sample webpage.

## 📌 Description

The script automates file uploads using Playwright’s `setInputFiles()` method:

- **Single File Upload:** Uploads `JUNAID_SQA_CV.pdf` and verifies the status message.
- **Multiple File Upload:** Uploads `JUNAID_SQA_CV.pdf` and `Najam Resume.pdf`.

## 📂 Test File

**Folder:** `upload-files/`  
**File:** `upload-files.spec.js`

## 🚀 Running the Test

Run the file upload test with:

```sh
npx playwright test tests/upload-files/upload-files.spec.js --project chromium --headed
```
