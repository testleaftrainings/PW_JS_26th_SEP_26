
import {test} from "@playwright/test"


//handle dropdown with select tag

test('learn to handle select dropdowns', async ({page}) => {

await page.goto('https://www.leafground.com/select.xhtml')

//select by value

await page.locator('[class="ui-selectonemenu"]').selectOption({value:"Playwright"})

//hard wait to pause the execution
await page.waitForTimeout(5000)

//recommended waits
//await page.waitForLoadState("domcontentloaded")

//select by index
await page.locator('[class="ui-selectonemenu"]').selectOption({index:4})


//to print all the dropdown values

//store the reference of all the dropdowns locators
let AllDropdown = page.locator('[class="ui-selectonemenu"]>option')

/* 
let AllDropdown=["select","PW","selenium"]  => this is an array, can be printed using array index 
for(i=0;i<AllDropdown.length;i++){
console.log(AllDropdown[i])  
}  */


//count of dropdown values

let ddcount=await AllDropdown.count()
console.log(ddcount)//5


//use for loop to iterate and print all the dropdown values

for (let index = 0; index<ddcount; index++) {
    
    //used nth(index) to find all the locator innertext() from the dropdown
    let values=await AllDropdown.nth(index).innerText()
    console.log(values);
    
}

/* Select Tool
Selenium
Playwright
Puppeteer
Cypress */
    
})


//custom dropdown (with out select tag)=> handle with click action

test.only('learn to handl custom dropdown',async ({page}) => {

await page.goto('https://www.leafground.com/select.xhtml')

//1st click to select the dropdown

await page.locator('text=Select Country').nth(1).click()

//2nd click to select the desired option from the dropdown

await page.locator('[data-label="India"]').click()
    
})