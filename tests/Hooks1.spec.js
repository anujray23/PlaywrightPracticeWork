// without hooks
import {test,expect} from '@playwright/test'
test('Home Page Test',async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')
// Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in"]').click()

// Home Page
// use common locator class to get all product in form of array
const products=await page.$$('.hrefch')
expect(products).toHaveLength(9)


// Log Out
await page.locator('#logot2').click()
});

test('Add Product to Cart Test',async ({page}) => {
    await page.goto('https://demoblaze.com/index.html')
// Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in"]').click()

//Add Product to Cart
await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
await page.locator('//a[normalize-space()="Add to cart"]').click()
// handle alert in produc to add to cart

page.on('dialog',async dialog=>{
    expect (dialog.message()).toContain('Product added')// to capture this alert and verify it
    await dialog.accept()
})


// Log Out
await page.locator('#logot2').click()


});