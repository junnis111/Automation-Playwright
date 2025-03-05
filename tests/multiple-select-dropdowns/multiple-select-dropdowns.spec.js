const{test , expect} = require('@playwright/test')

test("multipleSelectDropDown",async ({page})=>{
    test.setTimeout(60000)
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.selectOption('#colors' , ['Red' , 'Blue' , 'Green' ])

    // Assertions
    // Check number of options in dropdown
    const abc = await page.locator
    const options = await page.$$("#colors option")
    const optionLength = options.length
    console.log(optionLength);

    for(const option of options){
        const optionText = await option.textContent()
        console.log(optionText);
        
        if (optionText.includes('Green')) {
            await page.selectOption('#colors' , ['Green' , 'Blue'])
        }
    }
    
    

    //await page.waitForTimeout(5000)
})
