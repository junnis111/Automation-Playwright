const {test , expect} = require('@playwright/test')

test('test-1@fast', async ({page})=>{
    console.log("This is my Test-1");
   await page.waitForTimeout(1000) 
})
test('test-2@fast', async ({page})=>{
    console.log("This is my Test-2");
    await page.waitForTimeout(1000) 
})

test('test-3@slow' , async ({page})=>{
    console.log("This is my Test-3");
    
    await page.waitForTimeout(1000) 
})

test('test-4@slow' , async ({page})=>{
    console.log("This is my Test-4");
    
    await page.waitForTimeout(1000) 
})

test('test-5@fast@slow' , async ({page})=>{
    console.log("This is my Test-5");
    
    await page.waitForTimeout(1000) 
})

// npx playwright test tests/taggingTest.spec.js --project chromium --grep "@fast"
// npx playwright test tests/taggingTest.spec.js --project chromium --grep "@fast|@slow"
// npx playwright test tests/taggingTest.spec.js --project chromium --grep "@fast" --grep-invert "@slow"