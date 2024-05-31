const {test,expect} = require('@playwright/test')
test ('Alert with OK',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
// Enabling alert handling or called dialog window handler
page.on('dialog',async dialog=>{
expect (dialog.type()).toContain('alert')
expect (dialog.message()).toContain('I am alert box!')
await dialog.accept()// close by using ok button
// by enabling we open alert window(this is called dialog window handler)
})
await page.click("//button[normalize-space()='Alert']")
// before clicking alert we enable dialog window handler
await page.waitForTimeout(5000)
}
)