const {test,expect}=require('@playwright/test')
test('KeyboardAction',async ({page})=>{
await page.goto("https://gotranscript.com/text-compare")
//await page.locator('[name="text1"]').fill("Welcome to Automation")
//or
await page.type('[name="text1"]','welcome to Automation')
// ctrl+A- select the text
await page.keyboard.press('Ctrl+A')
// ctrl+C - copy the text
await page.keyboard.press('Ctrl+C')

// tab
await page.keyboard.down('TAB')
await page.keyboard.up('TAB')

//ctrl v- paste the text
await page.keyboard.press('Ctrl+V')

await page.waitForTimeout(5000)


})