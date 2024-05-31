const {test,expect,webkit}= require('@playwright/test')
test ('Handle Pages/Windows', async ({Page})=>{
const browser = await webkit.launch()
const context= await browser.newContext()// whenever we create context it contains multiple pages
const Page1=await context.newPage // this will create new page in Context(when we create context then it may contain n no of pages)
const Page2=await context.newPage
const allPages=context.pages()// to get all the pages in the same context
console.log("No of Pages created:",allPages.length)
// both page are indepnedent
await Page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(Page1).toHaveTitle("OrangeHRM")// on 1st open url and then verifying
// after we are clicking/trigger a below link to go on a new webpage
//const pagePromise=context.waitForEvent('page')


await Page2.goto("https://www.orangehrm.com/")
await expect(Page2).toHaveTitle("OrangeHRM")
})

test ('Handle Pages/Windows', async ({Page})=>{
const browser = await webkit.launch()
const context= await browser.newContext()// whenever we create context it contains multiple pages
const Page1=await context.newPage // this will create new page in Context(when we create context then it may contain n no of pages)
//const Page2=await context.newPage
//const allPages=context.pages()// to get all the pages in the same context
//console.log("No of Pages created:",allPages.length)
// both page are indepnedent
await Page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(Page1).toHaveTitle("OrangeHRM")// on 1st open url and then verifying
// after we are clicking/trigger a below link to go on a new webpage
const pagePromise=context.waitForEvent('page')
await Page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()
// now to store promise on new page
const newPage= await pagePromise
await expect(newPage).toHaveTitle("")
await Page1.waitForTimeout(3000)
await newPage.waitForTimeout(3000)
await browser.close()
})