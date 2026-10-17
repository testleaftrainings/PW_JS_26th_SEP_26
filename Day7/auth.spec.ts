
import {test , expect} from "@playwright/test"

test('storagestate auth file creation',async ({page}) => {

await page.goto('https://login.salesforce.com/')


//retry assertion
await expect (page.getByAltText('Salesforce login')).toBeVisible()

await page.getByRole('textbox',{name:"Username"}).fill('naveenchandar2212.e6e05bf9d2f0@agentforce.com')

await page.getByRole('button',{name:"Log In"}).click()

//await page.getByRole('textbox',{name:"Password"}).fill('Qeagle@123')
await page.getByLabel('Password').fill('Dev@2405')

await page.getByRole('button',{name:"Log In"}).click()

await page.waitForTimeout(30000)

await page.context().storageState({path:'Data/sflogin.json'})


})