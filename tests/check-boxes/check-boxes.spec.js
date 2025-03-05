const {test , expect} = require('@playwright/test')

test("checkBoxes" , async ({page})=>{
    test.setTimeout(60000)
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    // multiple checkboxes
    const checkBoxLocators = [
        "//input[@id='monday']",
        "//input[@id='sunday']",
        "//input[@id='tuesday']"
    ]

    for(const locator of checkBoxLocators){
        await page.locator(locator).check()
        await page.waitForTimeout(5000)
    }

    for(const locator of checkBoxLocators){
        const checkbox = page.locator(locator)
        if (checkbox.isChecked()) {
            checkbox.uncheck()
        } 
        await page.waitForTimeout(5000)
    }


})