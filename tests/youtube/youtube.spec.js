const {test , expect} = require('@playwright/test')

test("Youtube" , async ({page})=>{
    await page.goto('https:/youtube.com')
    //await page.getByPlaceholder('Search').fill('Rasha saki rasha')
    await page.locator("//input[@placeholder='Search']").fill("rasha saki rasha")
    await page.locator("//button[@title='Search']//yt-icon//div").click()
    await page.getByText('Mastana Saqi Rasha Yo Jaam Jaam Rora | Saf. K | Ghani Khan Kalam | New Pashto Song 2020').click()
    await page.getByTitle("Pause (k)").click()
})