import {test,expect} from '@playwright/test';
import {LoginPage} from 'PLAYWRIGHTAUTOMATION/Pages/LoginPage';
import {HomePage} from 'PLAYWRIGHTAUTOMATION/Pages/HomePage';
import { CartPage } from 'PLAYWRIGHTAUTOMATION/Pages/CartPage';
test ('test', async ({ page })=>{
//Login
const login = new LoginPage(page)
await login.gotoLoginPage()
await login.login('pavanol','test@123')// open login goto login and perform login
await page.waitForTimeout(3000)
// Home
const home=new HomePage(page)
await home.addProductToCart("Nexus 6")
await page.waitForTimeout(3000)
await home.gotoCart();// this is link
// Cart
// need to create object of cart
const cart = new CartPage(page)
await page.waitForTimeout(3000)
await cart.checkProductInCart('Nexus 6')// product verify
expect(await status).toBe(true)


})