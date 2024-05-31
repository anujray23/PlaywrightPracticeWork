const {test,expect}=require('@playwright/test')
test('Handle radio button',async ({page})=>{
await page.goto("https://www.techlistic.com/p/selenium-practice-form.html")
// radio button
await page.locator("//input[@value='Male']").check()
// or
//await page.check("//input[@value='Male']")
await expect(await page.locator("//input[@value='Male']")).toBeChecked()
await expect(await page.locator("//input[@value='Male']").isChecked()).toBeTruthy();// Male
await expect(await page.locator("//input[@value='Female']").isChecked()).toBeFalsy();//Female
//await page.waitForTimeout(3000)





}
)