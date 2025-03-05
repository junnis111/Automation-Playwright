const { test, expect } = require("playwright/test");

test("AssertionsTest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
  await expect(page).toHaveURL(
    "https://demo.nopcommerce.com/register?returnUrl=%2F",
  );

  //await expect().toBeVisible()
  const logoElement = page.locator('//img[@alt="nopCommerce demo store"]');
  await expect(logoElement).toBeVisible();

  // expect().toBeEnabled()
  const searchStoreBox = page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  // expect().toBeChecked()  //Radio
  const maleRadioButton = page.locator("#gender-male");
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  //expect().toBeChecked()  //Checkbox
  const newsLetter = page.locator("#Newsletter");
  await expect(newsLetter).toBeChecked();
});
