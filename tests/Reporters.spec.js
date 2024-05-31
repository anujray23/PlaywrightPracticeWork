const {test,expect} = require('@playwright/test')
test ('Test1', async ({page})=>{
await page.goto('https://www.demoblaze.com/index.html')
await expect(page).toHaveTitle('STORE')
await page.waitForTimeout(5000)
})
test ('Test2', async ({page})=>{
    await page.goto('https://www.demo.opencart.com/')
    await expect(page).toHaveTitle('Your Store')
    await page.waitForTimeout(5000)
    })
    test ('Test3', async ({page}) =>{
        await page.goto('https://www.demo.nopcommerce.com/')
        await expect(page).toHaveTitle('nopCommerce demo store')
        await page.waitForTimeout(5000)
    }
    )