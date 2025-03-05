const{test , expect} = require('@playwright/test')

test('mouseHover' , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const pointMelocator = page.locator("//button[normalize-space()='Point Me']")
    const laptopLocator = page.locator("//button[normalize-space()='Point Me']")

    await pointMelocator.hover()
    await laptopLocator.hover()
})