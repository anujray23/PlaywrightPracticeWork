import {test,expect} from ('@playwright/test')
test ('page screenshot',async ({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests/screenshot/'+Date.now()+'HomePage.png'})// only showed page display
});
test('Full page screenshot',async ({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})// full page.screenshot
});
test.only('Element screenshot', async ({Page})=>{
await page.goto('https://demo.opencart.com/')
await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({path:'tests/screenshots/'+Date.now()+'Macbook.png'})
// particular element locator
});