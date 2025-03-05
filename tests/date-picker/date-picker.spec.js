const { test, expect } = require("@playwright/test");

test("datePicker", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.click("//input[@id='datepicker']");
  let day = "2";
  let month = "August";
  let year = "2026";

  while (true) {
    const monthLocator = await page
      .locator("//span[@class='ui-datepicker-month']")
      .textContent();
    const yearLocator = await page
      .locator("//span[@class='ui-datepicker-year']")
      .textContent();
    if (monthLocator == month && yearLocator == year) {
      await page.click(`//a[@class='ui-state-default'][text()='${day}']`);
      break;
    }
    await page.click("//span[@class='ui-icon ui-icon-circle-triangle-e']");
  }
  await page.waitForTimeout(3000);
});
