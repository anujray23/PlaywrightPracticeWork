const {test,expect} = require('@playwright/test')
test ("Handle checkboxes",async ({page})=>{
await page.goto("https://www.techlistic.com/p/selenium-practice-form.html")
// single check box
await page.locator("//input[@id='tool-1' and @type='checkbox']").check();
expect(await page.locator("//input[@id='tool-1' and @type='checkbox']")).toBeChecked()
// or
expect(await page.locator("//input[@id='tool-1' and @type='checkbox']").isChecked()).toBeTruthy()

// Multiple locators
const checkboxes=[
    "//input[@id='tool-0' and @type='checkbox']",
    "//input[@id='tool-1' and @type='checkbox']",
    "//input[@id='tool-2' and @type='checkbox']"
];
for(const locator of checkboxLocators)// select multiple checkboxes 
{
await page.locator(locator).check()

}
for(const locator of checkboxLocators)// unselect multiple checkboxes which are alreadyselected
{
if (await page.locator(locator).isCheckedheck())
await page.locator(locator).uncheck();
}

await page.waitForTimeout(5000)
}
)