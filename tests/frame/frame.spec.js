const {test , expect} = require('@playwright/test')

test('Frame' , async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allFrames = page.frames()
    console.log("Name of frames:" , allFrames.length);

    // method 1
    /* const frame1 = page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']")
    await frame1.fill('junaid khan')
    await page.waitForTimeout(5000)
    */

    // method 2
    const frame = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame.locator("//input[@name='mytext1']").fill('Junaid')
    await page.waitForTimeout(5000)

})