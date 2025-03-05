const { test, expect } = require("@playwright/test");

test("test-1@fast", async ({ page }) => {
  console.log("This is my Test-1");
});
test("test-2@fast", async ({ page }) => {
  console.log("This is my Test-2");
});

test("test-3@slow", async ({ page }) => {
  console.log("This is my Test-3");
});

test("test-4@slow", async ({ page }) => {
  console.log("This is my Test-4");
});

test("test-5@fast@slow", async ({ page }) => {
  console.log("This is my Test-5");
});

// npx playwright test tests/taggingTest.spec.js --project chromium --grep "@
// npx playwright test tests/taggingTest.spec.js --project chromium --grep "@fast|@slow"
// npx playwright test tests/taggingTest.spec.js --project chromium --grep "@fast" --grep-invert "@slow"
