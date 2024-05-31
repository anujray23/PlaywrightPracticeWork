const {test,expect}= require('@playwright/test')
test ('DropDown', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
// drop down with multiple option and select one option at a time
// approach 1(by label )
// await page.locator('#country').selectOption({label: 'India'}) // as label
// approach 2 (by visible text)
//await page.locator('#country').selectOption('India') 
// approach 3(by using attribute/option value)
// await page.locator('#country').selectOption({value:'uk'})
// approach 4(by using index number)
//await page.locator('#country').selectOption({index: 1})
// directly calling selectOption from the page fixture need to pass 2 parameter 1- locator, 2- value
await page.selectOption("#country",'India')

//Assertion to verify
//1, chk no of options in dropdown by using variable
//const options= await page.locator('#country option') 
//await expect(options).toHaveCount(10)
//2, chk no of options in dropdown 
const options= await page.$$('#country option')// $$ returns element in form of array
//console.log("Number of options:", options.length)//will get total option
await expect(options.length).toBe(10)
// now to check particular element is present in drop down or not verify by using assertion 
// approach 1
const content = await page.locator('#country').textContent()
await expect(content.includes('India')).toBeTruthy()





await page.waitForTimeout(5000)



})