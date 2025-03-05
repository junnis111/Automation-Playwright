const { test, expect } = require("@playwright/test");

test("keyboardActions", async ({ page }) => {
  await page.goto("https:/gotranscript.com/text-compare");
  // Enter Text
  await page.fill(
    "//textarea[@placeholder='Paste one version of the text here.']",
    "My name is Junaid Khan",
  );
  // Select and Copy Text
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  // Tab
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");
  // Paste Text
  await page.keyboard.press("Control+V");
  await page.waitForTimeout(5000);
});
