const {test , expect} = require('@playwright/test')
import LoginPage from '../../pages/login'
import HomePage from '../../pages/homepage'



test('page-object-models', async({page})=>{
    
    // login-page
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol', 'test@123')

    // home-page
    const homepage = new HomePage(page)
    await homepage.addProductToCart("Samsung galaxy s6")
})