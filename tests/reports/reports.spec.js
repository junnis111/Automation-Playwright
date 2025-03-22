import { test, expect } from "@playwright/test";

test("test-1", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/prod.html?idp_=1");
  await expect(page).toHaveTitle("STORE");
});

test("test-2", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");
  await expect(page).toHaveTitle("OpenCart - Demo");
});

test("test-3", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
});
