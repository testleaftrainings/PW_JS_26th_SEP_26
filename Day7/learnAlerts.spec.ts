import {test} from "@playwright/test"


test('learn to handle multiple alerts in the page',async ({page}) => {

await page.goto('https://www.leafground.com/alert.xhtml')

//register the event listener to handle the alert before the click action
//page.on-> handles all the alerts in the page
//page.on is the event listener and dialog is event handled using async callback function

page.on('dialog', async (alert) => {

let alertype=alert.type()
console.log(alertype)
    
let alertmessage=alert.message()
console.log(alertmessage)

if(alertype==="prompt"){

await alert.accept("Playwright")

}else{

await alert.dismiss()
  
}
    
})


//by default-> playwright automatically cancels all the alerts

//simple or alert
await page.locator('//span[text()="Show"]').first().click()

// confirm alert
await page.locator('//span[text()="Show"]').nth(1).click()

//prompt alert
await page.locator('//span[text()="Show"]').nth(4).click()

})


test.only('learn to handle single alert in the page',async ({page}) => {

await page.goto('https://www.leafground.com/alert.xhtml')

//register the event listener to handle the alert before the click action
//page.once-> handles the first occuring alert alone and stops listening
//page.once is the event listener and dialog is event handled using async callback function
page.once('dialog', async (alert) => {

let alertype=alert.type()
console.log(alertype)
    
let alertmessage=alert.message()
console.log(alertmessage)

if(alertype==="prompt"){

await alert.accept("Playwright")

}else{

await alert.dismiss()
  
}
    
})


//by default-> playwright automatically cancels all the alerts

//simple or alert
await page.locator('//span[text()="Show"]').first().click()

// confirm alert
await page.locator('//span[text()="Show"]').nth(1).click()

//prompt alert
await page.locator('//span[text()="Show"]').nth(4).click()

})

