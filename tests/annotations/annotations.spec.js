const { test, expect } = require("@playwright/test");

/*
//1) skip //when we use skips that means we are skiping that test

test.skip('test-1', async ({page})=>{
    console.log("This is my Test-1")
})

//2) skip using condition

test('test-conditions', async ({page , browserName})=>{
    console.log("This is my Test-condition")
    if (browserName === 'chromium') {
        test.skip()
    }
})
 */

//3)  only // when we use only means only that test will run

test.only("test-2", async ({ page }) => {
  console.log("This is my Test-2");
});

//4) Slow //Slow test will be given triple the default timeout.
test("test-slow", async ({ page }) => {
  test.slow();
  console.log("This is my test-slow");
});
