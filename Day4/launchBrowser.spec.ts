/* 
Browser -> atcual browser engine
Context -> isolated and incognito window
Page -> tab or page specific to the context */


import {chromium, firefox, test} from "@playwright/test"


test('learn to launch the browser',async() => {

 let browser = await firefox.launch()
 let context = await browser.newContext()
 let page = await context.newPage()

 await page.goto('https://www.amazon.in/')

 //directly printing the url
 console.log(page.url());

 //store it in a variable and print it
 const URL= page.url()
 console.log(URL); //https://www.amazon.in/

//title
await page.waitForLoadState('domcontentloaded')
//await page.waitForTimeout(3000)
const Title=await page.title()
console.log(Title);  //Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in

    
})


/* Playwright execution command
   npx playwright test filename.spec.ts
   ex: launchBrowser.spec.ts */

//Browser launch with page fixture:

/* 
 let browser = await chromium.launch()
 let context = await browser.newContext()
 let page = await context.newPage() 
 
 Instead of writing the 3 lines of code for page, we can use inbuilt page fixture as below

 test('title',async({page})=>{
  })
 
 */


test.only('learn to launch the browser using page fixture',async({page}) => {


await page.goto('https://leaftaps.com/opentaps/control/main')

})
