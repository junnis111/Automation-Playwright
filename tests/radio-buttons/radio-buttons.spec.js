const { test, expect } = require("@playwright/test");

test("inputBox", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(page.locator("#male")).toBeVisible();
  await expect(page.locator("#male")).toBeEditable();
  await page.check("#male");
  await expect(page.locator("#male")).toBeChecked();
  await expect(page.locator("#male").isChecked()).toBeTruthy();

  await expect(await page.locator("#female").isChecked()).toBeFalsy();

  await page.waitForTimeout(50000);
});
