const {test,expect}= require('@playwright/test')
test ('Mouse Double Click', async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const btnCopy=await page.locator('//*[@id="HTML10"]/div[1]/button')
await btnCopy.dblclick()
// verify particular element
const f2=await page.locator('#field2')
// by assertion validate
await expect(f2).toHaveValue('Hello World!')
await page.waitForTimeout(5000)

})