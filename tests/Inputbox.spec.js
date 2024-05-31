const {test,expect}=require('@playwright/test')
test('handle inputbox',async ({page})=>{

await page.goto('https://www.techlistic.com/p/selenium-practice-form.html')
// input box  First name
await expect(await page.locator("//input[@name='firstname']")).toBeVisible()
await expect(await page.locator("//input[@name='firstname']")).toBeEmpty()
await expect(await page.locator("//input[@name='firstname']")).toBeEditable()
await expect(await page.locator("//input[@name='firstname']")).toBeEnabled()
await page.locator("//input[@name='firstname']").fill("Anuj");
//or
//page.fill("//input[@name='firstname']",'anuj')
await page.waitForTimeout(5000);// pausing code
}
)