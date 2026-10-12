// import {test,expect} from '@playwright/test'
// import { Homepage } from '../pageObjects/Homepage'
// import { RegistrationPage } from '../pageObjects/RegistrationPage'



// test('tcregister', async ({ page }) => {

//     const homepage = new Homepage(page)

//     await homepage.goTo()
//     await homepage.clickRegisterLink()

//     console.log('URL after clicking Register:', page.url())

//     await page.waitForTimeout(2000)

//     const registerpage = new RegistrationPage(page)

//     await registerpage.registerUser(
//         'john',
//         'saw',
//         'texas',
//         'canada',
//         'usa',
//         '1232434',
//         '44123068',
//         '111111',
//         'yusuf',
//         'asdf'
//     )

//     await registerpage.clickOnRegisterButton()

//     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//      await page.waitForTimeout(2000)
// })

import {test,expect} from '@playwright/test'
import { POManager } from '../pageObjects/POManager'


test('tcregister', async ({ page }) => {

    const  pomanager=new POManager(page)
    const homepage= pomanager.getHomepage()

    await homepage.goTo()
    await homepage.clickRegisterLink()

    const registerpage = pomanager.getRegistrationPage()
    
    // console.log('URL after clicking Register:', page.url())

    await page.waitForTimeout(2000)

    //const registerpage = new RegistrationPage(page)

    await registerpage.registerUser(
        'john',
        'saw',
        'texas',
        'canada',
        'usa',
        '1232434',
        '44123068',
        '111111',
        'yusuf',
        'asdf'
    )

    await registerpage.clickOnRegisterButton()

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
     await page.waitForTimeout(2000)
})