const {test,expect} = require('@playwright/test')
test ('Mouse hover'), async ({page})=>{
await page.goto('https://www.amazon.in/')
const signin=await page.locator('//*[@id="nav-xshop"]/a[1]')
const account=await page.locator('//*[@id="nav-al-your-account"]/a[1]/span')
await signin.hover()
await account.hover()
await page.waitForTimeout(5000)



    
}