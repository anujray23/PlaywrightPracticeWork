const{test,expect}=require('@playwright/test')
test('Handle Dropdowns',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//Select multiple options from multi select dropdowns
await page.selectOption('#colors',['Blue','Red','Yellow'])
await page.waitForTimeout(5000)
})