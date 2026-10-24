import {test} from "@playwright/test"

test('concurrent approach of handling windows',async ({page,context}) => {


await page.goto('https://www.leafground.com/window.xhtml')

//register the event listener and create the promise

let [newPage]=await Promise.all([context.waitForEvent('page'),page.getByRole('button',{name:"Open Multiple"}).click()])
   
let allPages=newPage.context().pages()

//allPages(array of pages)=> mainpage=0,childpage1=1 and childpage2=2

//context() -> returns the browser context of the page
//pages()-> returns all the pages in the context

//find the number of pages
let pageCount=allPages.length
console.log(pageCount)//3

//global declaration

let web:any
let table:any

//use for loop to print the title of all pages

for (let index = 0; index < pageCount; index++) {

  await page.waitForLoadState('domcontentloaded')

  let Title=await allPages[index].title()

  console.log(Title);
  
/* title of page
Window=0
Web Table=1
Dashboard=2 */

if(Title==="Web Table"){  //comparision

web=allPages[index] //index of the title is assigned to variable as childpage reference

//switch to webtable

await web.locator("[placeholder='Search']").fill('india')

}else if(Title==="Dashboard"){

 table=allPages[index]

 await table.locator("[name='email']").fill("gauthami.vn@testleaf.com")

}
}

})