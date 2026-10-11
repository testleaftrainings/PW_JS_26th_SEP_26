 import {test, expect} from "@playwright/test"


 test('learn assertions',async ({page}) => {


 await page.goto('https://leaftaps.com/opentaps/control/login')

let ptitle=await page.title()
console.log(ptitle)//Leaftaps - TestLeaf Automation Platform

let purl=page.url()
console.log(purl)//https://leaftaps.com/opentaps/control/login


//retry assertion or Locator based assertion

await expect(page).toHaveTitle('Leaftaps - TestLeaf Automation Platform')
//await expect.soft(page).toHaveTitle(' - TestLeaf Automation Platform')
await expect(page).toHaveURL('https://leaftaps.com/opentaps/control/login',{timeout:2000})


//Non-retry assertion or Generic assertion

expect(ptitle).toBe('Leaftaps - TestLeaf Automation Platform')
expect(purl).toBe('https://leaftaps.com/opentaps/control/login')




//username field -checking whether the textbox is visible or not

await expect(page.locator('//input[@id="username"]')).toBeVisible()
await expect(page.locator('//input[@id="username"]')).toBeEditable()


//password field -apply multiple assertions

 let pwd=page.locator('//input[@id="password"]')


 //by default hard assertion->A hard assertion stops the test immediately when the assertion fails.

 await expect(pwd).toBeEmpty()

 //soft assertion: A soft assertion records the failure but allows the test to continue executing. 
 // The test is marked as failed if any soft assertion fails.

 await expect.soft(pwd).toBeDisabled()  
 await expect(pwd).toBeEnabled()
 //await expect(pwd).toBeHidden()

 console.log("Assertion completed successfully");


 })