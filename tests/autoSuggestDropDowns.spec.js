const{test , expect} = require('@playwright/test')

test("autoSuggestDropDowns",async ({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Dehli')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    const options = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of options){
        let optionText = await option.textContent()
        if (optionText.includes('Mayur Vihar')) {
            await option.click()
            break;
        }
        
    }
    
    await page.waitForTimeout(5000)
})