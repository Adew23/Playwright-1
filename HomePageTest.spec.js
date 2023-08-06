const { test, expect } = require('@playwright/test');

//import {test, expect} from '@playwright/test'  // Approah-2 import line 1

test('HomePage Test' ,async ({page})=>{

await page.goto('https://sandbox.oncentrl.net/');  //Launch URL

 const pageTitle=await page.title();
 console.log('Page title is:', pageTitle);

  await expect(page).toHaveTitle('CENTRL');    // Checking Page title

  const pageURL=page.url();
  console.log('Page URL is : ', pageURL);
 

  await expect (page).toHaveURL('https://sandbox.oncentrl.net/#/login'); // Verify URL 

  // loacate ele using locators

  await page.locator('#email').fill("regression@22.12.com");

  await page.click('button.primary');
  
 // await page.waitForSelector('#current-password');
  await page.locator('#current-password').fill('Centrl@123');
  await page.click('button.primary');






 //await page.close();


 // Todo  Video-4


});
