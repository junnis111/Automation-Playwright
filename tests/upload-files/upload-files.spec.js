const { test, expect } = require("@playwright/test");

// test('uploadFiles', async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/uploadFiles/JUNAID_SQA_CV.pdf");
//     await page.click("//button[normalize-space()='Upload Single File']")
//     await expect(page.locator("//p[@id='singleFileStatus']")).toHaveText("Single file selected: JUNAID_SQA_CV.pdf, Size: 49598 bytes, Type: application/pdf")

//     //await page.waitForTimeout(5000)
// })

// Upload Multiple Files
test("uploadFiles", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .locator("#multipleFilesInput")
    .setInputFiles([
      "tests/uploadFiles/JUNAID_SQA_CV.pdf",
      "tests/uploadFiles/Najam Resume.pdf",
    ]);
  await page.click("//button[normalize-space()='Upload Multiple Files']");

  await page.waitForTimeout(5000);
});
