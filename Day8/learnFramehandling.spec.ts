import {test} from "@playwright/test"

test('learn to handle the frames',async ({page}) => {

await page.goto('https://www.leafground.com/frame.xhtml')

//returns an array frames present in the page
let allFrames=page.frames()

//no. of frames present in the page
// let frcount=allFrames.length
// console.log(frcount)  //5

//frame index starts from 0 ->main page, 1st index-> frame1, 2nd->2nd frame...

//print the title or url of the frame

// for (let index = 0; index < frcount; index++) {

//     //const frameTitle = (await allFrames[index].title())
//     //console.log(`the frame title is ${frameTitle}`);
//     const frameUrl = (allFrames[index].url())
//     console.log(`the frame title is ${frameUrl}`);
// }
/* title
the frame title is Frame
the frame title is 
the frame title is 
the frame title is 
the frame title is  */

/* url
the frame title is https://www.leafground.com/frame.xhtml
the frame title is https://www.leafground.com/default.xhtml
the frame title is https://www.leafground.com/nested.xhtml
the frame title is https://www.leafground.com/page.xhtml
the frame title is https://www.leafground.com/framebutton.xhtml*/

//1. approach 1: handle frames using index

//single frame handling

// let frame1=allFrames[1]
// await frame1.locator('#Click').click()

//nested frame

// let frame4=allFrames[4]
// await frame4.locator('#Click').click()

//2. approach 2: handle frames using frameLocator

//click directly
                    //locator for frame                    //locator for button
//await page.frameLocator('[src="default.xhtml"]').locator('(//button[text()="Click Me"])[1]').click()
   
//with reference
//  let frRef=page.frameLocator('[src="default.xhtml"]')
//  await frRef.locator('(//button[text()="Click Me"])[1]').click()


//nested frame
//locate outerframe-> locate the innerframe-> locator for button and then click()

//await page.frameLocator('[src="page.xhtml"]').frameLocator('[name="frame2"]').locator('#Click').click()

//with ref

// let outRef=page.frameLocator('[src="page.xhtml"]')
// let inRef=outRef.frameLocator('[name="frame2"]')
// await inRef.locator('#Click').click()


//3. approach 3: using frameobjects (page.frame)

//single frame
await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator(`#Click`).click()

//nested frame
await page.frame({name:"frame2"})?.locator('#Click').click()


})