const { test, expect } = require("@playwright/test");

test("softAssertions", async ({ page }) => {
  await page.goto("https://www.youtube.com");

  // Hard Assertions
  // await expect(page).toHaveTitle('YouTube')
  // await expect(page).toHaveURL('https://www.youtube.com')
  // await expect(page.locator("//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//div")).toBeVisible()

  // Soft Assertions
  await expect.soft(page).toHaveTitle("YouTubee");
  await expect.soft(page).toHaveURL("https://www.youtube.com");
  await expect
    .soft(
      page.locator(
        "//ytd-topbar-logo-renderer[@id='logo']//div[@class='style-scope ytd-topbar-logo-renderer']//div",
      ),
    )
    .toBeVisible();
});
