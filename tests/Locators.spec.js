const {test,expect} = require ('@playwright/test')
test ('Locators', async ({page})=>{
await page.goto('https://demoblaze.com/index.html')
// click on login button
await page.click('id=login2')
// provide user name as css
await page.fill('#loginusername','pavanol')
// provide password as css
await page.fill("input[id='loginpassword']",'test@123')
// click on login button
await page.click("//button[normalize-space()='Log in']")

// verify logout link is present or not
const logoutlink= await page.locator("//a[normalize-space()='Log out']")
await expect(logoutlink).toBeVisible()
await page.close()

}
)