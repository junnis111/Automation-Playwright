const {test , expect} = require('@playwright/test')

// test('screenShot' , async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.screenshot({path:"tests/screenshot/"+Date.now()+"HomePage.png"})
// })

// test.only('screenShot' , async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.screenshot({path:"tests/screenshot/"+Date.now()+"FullPage.png",fullPage:true})
// })

test('screenShot' , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//*[@id='HTML1']").screenshot({path:"tests/screenshot/"+Date.now()+"Element.png"})
})