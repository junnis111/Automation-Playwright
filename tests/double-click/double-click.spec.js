const {test , expect} = require('@playwright/test')

test('doubleClick' , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('button', { name: 'Copy Text' }).dblclick();
   // await page.waitForTimeout(5000)   

    const input2 =await page.locator("//input[@id='field2']")
    console.log("Text:",await input2.inputValue());
    

    await expect(input2).toHaveValue("Hello World!")
})