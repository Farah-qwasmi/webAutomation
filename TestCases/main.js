
const { chromium } = require('playwright');

import dotenv from "dotenv";
dotenv.config();
export let page;
export let browser;
export const prepareBrowser = async browserName => {
  browser = await browserName.launch({headless: false });
  page = await browser.newPage({
    bypassCSP: true,
  });

    return {page, browser};

};


// Jest Before All
beforeAll(async () => {
  jest.setTimeout(20000);
 await prepareBrowser(chromium);
 });


// // Jest After All
afterAll(async () => {  
  await page.close();
await browser.close();

});

