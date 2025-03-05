const{test , expect} = require('@playwright/test')

test("inputBox",async ({page})=>{
    test.setTimeout(60000)  // playwright byDefault Timeout is 30 second so this code extend time to 60 second
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#name')).toBeEmpty()
    await expect(page.locator('#name')).toBeEnabled()
    await expect(page.locator('#name')).toBeEditable()
    await page.fill('#name' , 'Junaid')

    // pausing code
    await page.waitForTimeout(50000);
}) 