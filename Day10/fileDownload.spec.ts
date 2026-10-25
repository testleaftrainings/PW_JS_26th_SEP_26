import {test} from "@playwright/test"

test('Learn to download the file',async ({page}) => {

await page.goto('https://the-internet.herokuapp.com/download')

//register the listener

let downloadReference = page.waitForEvent('download')

//trigger the click action

await page.locator('//a[text()="Playwright Filechooser.docx"]').click()

//resolve the promise for listener and capture the download ref in variable

//await downloadReference.saveAs('Data/Sample.png')

let fdownload =await downloadReference

await fdownload.saveAs('Data/Sample.png')

})