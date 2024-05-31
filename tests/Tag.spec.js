const {test,expect} = require('@playwright/test')
test ('test1@sanity',async ({Page})=>{
console.log('this is my test')
})
test ('test2@smoke',async ({Page})=>{
console.log('this is my test')
})
test ('test3@reg',async ({Pag})=>{
console.log('this is my test')
})
test ('test@sanity@reg',async ({Page})=>{// npx playwright test tests/Tag.spec.js --project chromium --grep @sanity --grep-invert @reg
console.log('this is my test')// this will execute only sanity not regression
})