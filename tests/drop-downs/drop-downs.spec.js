const { test, expect } = require("@playwright/test");

test("dropDown", async ({ page }) => {
  test.setTimeout(60000);
  await page.goto("https://testautomationpractice.blogspot.com/");

  // methods of Select dropdown option
  //await page.locator('#country').selectOption({label:'France'})  //Label//Visibile Text
  //await page.locator('#country').selectOption('France')  //Label//Visibile Text
  //await page.locator('#country').selectOption({value :'uk'})  //Using Value
  //await page.locator('#country').selectOption({index : 1})
  //await page.selectOption('#country' , 'France') By using Text

  // Assertions
  /* 1) Check number of options in dropDown Approch-1
    const options = await page.locator('#country option')
    await expect(options).toHaveCount(10)
    
    // 2) check number of options in dropDown Approach-2
    const options_1 = await page.$$('#country option')
    console.log("Number of options:" , options_1.length);
 

    // 3) Check presence of value in dropDown Approach-1
    const content = await page.locator('#country').textContent()
     expect(content.includes('France')).toBeTruthy()
     */

  // 4) Check presence of value in dropdown - Approach-2 using loop
  const options = await page.$$("#country option");

  let status = false;
  for (const option of options) {
    const optionText = await option.textContent();
    if (optionText.includes("France")) {
      await page.locator("#country").selectOption("France");
      status = true;

      break;
    }
  }

  await page.waitForTimeout(50000);
});
