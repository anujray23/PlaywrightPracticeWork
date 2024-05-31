const {test,expect}=require ('@playwright/test')
test ('date picker',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.fill('#datepicker','03/01/2024')
// date picker handle
// 1st need to define 
const year="2024"
const month="march"
const date="20"
await page.click('#datepicker')// opens calendar
while(true)
{
const currentYear=await page.locator('.ui-datepicker-year').textContent()
const currentMonth=await page.locator('.ui-datepicker-month').textContent()
if(currentYear ==year && currentMonth==month)
{
    break;
}
await page.locator('[title="Next"]').click()// next

}
// to take date 2 way 1st by giving xpath of particular date or 1st provide array list of date and then pick 
/*const dates=await page.$$("//a[@class='ui-sate-default']")
for(const dt of dates)
{
if (await dt.textContent()==date)
{
    await dt.click()
    break;
}
}*/
// or date selection without loop
await page.click("//a[@class='ui-state-default'][text()='${date}']")

await page.waitForTimeout(3000);




});