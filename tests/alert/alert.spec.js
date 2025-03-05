const { test, expect } = require("@playwright/test");
const exp = require("constants");

test.skip("Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });
  await page.locator("//button[@id='alertBtn']").click();
});

test.skip("Confirm", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept();
    //await dialog.dismiss()
  });
  await page.locator("//button[@id='confirmBtn']").click();
  await expect(page.locator("//p[@id = 'demo']")).toHaveText("You pressed OK!");
});

test("Prompt", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Junaid");
    //await dialog.dismiss()
  });
  await page.locator("//button[@id='promptBtn']").click();
  await expect(page.locator("//p[@id='demo']")).toHaveText(
    "Hello Junaid! How are you today?",
  );
});
