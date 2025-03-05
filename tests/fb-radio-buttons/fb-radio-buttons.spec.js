const { test, expect } = require("@playwright/test");

test("fbRadioButtons", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("https://www.facebook.com/r.php?entry_point=login");
  await expect(page).toHaveURL(
    "https://www.facebook.com/r.php?entry_point=login",
  );
  await expect(page).toHaveTitle("Sign up for Facebook");

  //await page.getByRole('radio',{name:'female'}).check()
  await page.locator("//label[normalize-space()='Female']").click();
  const femaleRadio = page.locator("//label[normalize-space()='Female']");
  await expect(femaleRadio).toBeVisible();
  await expect(femaleRadio).toBeChecked();
  await expect(femaleRadio).toBeEnabled();
  await expect(femaleRadio).toBeEditable();
  await page.locator("//label[normalize-space()='Custom']").click();
  await page.waitForTimeout(5000);
});
