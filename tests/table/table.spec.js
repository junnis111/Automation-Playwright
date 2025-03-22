const { test, expect } = require("@playwright/test");
const { log } = require("console");

test("Table", async ({ page }) => {
  //test.setTimeout(60000)
  await page.goto("https://testautomationpractice.blogspot.com/");

  // 1) Select number of rows and columns
  const table = page.locator("//table[@id='productTable']");
  const columns = table.locator("thead tr th");
  console.log("Number of columns:", await columns.count());
  expect(await columns.count()).toBe(4);

  const rows = table.locator("tbody tr");
  console.log("Number of rows:", await rows.count());
  expect(await rows.count()).toBe(5);

  // 2) Select checkbox for Smartwatch
  // const matchedRow = rows.filter({ hasText: 'Smartwatch' });
  // await matchedRow.locator("input[type='checkbox']").check();

  // 3) Select Multiple Checkbox
  // await selectProduct(rows,page,'Tablet')
  // await selectProduct(rows,page,'Smartwatch')
  // await selectProduct(rows,page,'Laptop')
  // await page.waitForTimeout(5000)

  const pages = page.locator(".pagination li a");
  console.log("Pages:", await pages.count());
  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
  }
});

// Function for select multiple checkbox
async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    // has : page.locator('td'),
    hasText: name,
  });
  await matchedRow.locator("input").check();
}
