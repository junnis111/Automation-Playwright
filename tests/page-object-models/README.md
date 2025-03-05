# 🎭 Playwright Page Object Model (POM) Test

This project follows the **Page Object Model (POM)** pattern using Playwright for test automation.

## 📌 Description

This test:

- Navigates to the **login page** and logs in with a username and password.
- Navigates to the **home page** and adds a product to the cart.

## 📂 Project Structure

- tests/ │── page-object-models/ │ ├── page-object-models.spec.js # Main test file │ ├── pages/ │ ├── login.js # Login page object │ ├── homepage.js # Home page object

### 🛠 Installation

Ensure you have Playwright installed. If not, install it with:

```sh
npm install @playwright/test
npx playwright install
npx playwright test tests/page-object-models/page-object-models.spec.js --project=chromium --headed
```
