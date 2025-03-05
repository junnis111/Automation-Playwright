const { test, expect } = require("@playwright/test");

test.beforeAll(async () => {
  console.log("This is beforeAll hook");
});

test.beforeEach(async () => {
  console.log("This is beforeEach hook");
});

test.afterEach(async () => {
  console.log("This is afterEach hook");
});

test.afterAll(async () => {
  console.log("This is afterAll hook");
});

test.describe("Group ", async () => {
  test("test1", async ({ page }) => {
    console.log("This is console log 1");
  });

  test("test2", async ({ page }) => {
    console.log("This is console log 2");
  });
});

test.describe("Group ", async () => {
  test("test3", async ({ page }) => {
    console.log("This is console log 3");
  });

  test("test4", async ({ page }) => {
    console.log("This is console log 4");
  });
});
