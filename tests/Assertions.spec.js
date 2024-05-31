const {test,expect}=require('@playwright/test')
test('AssertionsTest',async ({page})=>{
// open app url
await page.goto('https://demo.nopcommerce.com/register')
//1) expect(page).toHaveURL   has proper url or not

 await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
//2) expect(page).toHaveTitle  to verify title of the page
await expect(page).toHaveTitle('nopCommerce demo store. Register')
//3) expect(locator).toBeVisible()  Element is visible
const logoElement= await page.locator('.header-logo')
await expect(logoElement).toBeVisible()
}
)