
import {test , expect} from "@playwright/test"

test('learn Playwright selectors',async ({page}) => {

await page.goto('https://login.salesforce.com/')


//retry assertion
await expect (page.getByAltText('Salesforce login')).toBeVisible()

await page.getByRole('textbox',{name:"Username"}).fill('gauthami.vn@testleaf.com')

await page.getByRole('button',{name:"Log In"}).click()

//await page.getByRole('textbox',{name:"Password"}).fill('Qeagle@123')
await page.getByLabel('Password').fill('Qeagle@123')

await page.getByRole('button',{name:"Log In"}).click()

await page.getByTitle('App Launcher').click()

//await page.getByText('View All',{exact : true}).click()
await page.locator('[aria-label="View All Applications"]').filter({hasText:"View All"}).click()


await page.getByPlaceholder('Search apps or items...').fill('leads')

//await page.getByTestId('').click()



    
})