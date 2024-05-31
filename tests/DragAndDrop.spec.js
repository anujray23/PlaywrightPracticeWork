const {test,expect} = require('@playwright/test')
test ('Drag and Drop', async ({page})=>{
await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
const rome=await page.locator('#box6')
const italy= await page.locator('#box106')
//approach1
/*
await rome.hover()
await page.mouse.down()
await italy.hover()
await page.mouse.up()*/
//approach2
await rome.dragTo(italy)

// washington-->us
const washington= await page.locator('#box3')
const usa= await page.locator('#box103')
await washington.dragTo(usa)
await page.waitForTimeout(5000)

})