const { test, expect } = require("@playwright/test");

test("hiddentDropDown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
  await page.locator("//span[normalize-space()='PIM']").click();
  await page
    .locator(
      "//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]",
    )
    .click();
  // waiting for options
  await page.waitForTimeout(3000);

  let options = await page.$$("//div[@role='option']//span");
  for (let option of options) {
    let optionText = await option.textContent();
    if (optionText.includes("QA Lead")) {
      await option.click();
    }
  }
});
