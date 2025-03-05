const { test, expect } = require("@playwright/test");

test("InnerFrames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame3 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await frame3.fill("input[name='mytext3']", "JuNaid");

  // selecting child frame
  const childFrame = await frame3.childFrames();
  console.log(childFrame.length);

  await childFrame[0]
    .locator("//div[@id='i21']//div[@class='uHMk6b fsHoPb']")
    .check();
  await page.waitForTimeout(5000);
});
