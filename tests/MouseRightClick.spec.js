const {test, expect}= require('@playwright/test')
test ('Mouse Right Click', async ({page})=>{
await page.goto('https://www.snapdeal.com/')
const button= await page.locator('//span[@class="accountUserName col-xs-12 reset-padding"]')
await button.click({button: 'right'});

await page.waitForTimeout(5000)

})