
import {test , expect} from "@playwright/test"

//test annotation to reuse the context

test.use({

    storageState:'Data/sflogin.json'
})

test('skip login using storage state',async ({page}) => {

await page.goto('https://orgfarm-67b37c293e-dev-ed.develop.lightning.force.com/lightning/page/home')

await page.waitForTimeout(2000)


})
