const { test, expect } = require("@playwright/test");

test("mouseRightClick", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const source = page.locator("//div[@id='draggable']");
  const target = page.locator("//div[@id='droppable']");
  // Approach 1
  // await source.dragTo(target)
  // const dropped = await page.locator("//p[normalize-space()='Dropped!']")
  // await expect(dropped).toHaveText("Dropped!")

  // Approach 2
  await source.hover();
  await page.mouse.down();

  await target.hover();
  await page.mouse.up();
});
