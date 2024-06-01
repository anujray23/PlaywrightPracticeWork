import {test,expect} from '@playwright/test'
const { PlaywrightDevPage } = require('../pages/login_page');
test ('Login to OrangeHRM',async ({page})=>{
const loginPage = new LoginPage(page)
await loginPage.goto()
await loginPage.login('Admin','admin123')


}

)