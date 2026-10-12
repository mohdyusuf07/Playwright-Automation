import {test,expect} from '@playwright/test'
import { POManager } from '../pageObjects/POManager'
import { customtest as test, expect } from  '../fixture/testfixture'

test('tcregister', async ({ page, testdataForregistration}) => {

    const  pomanager=new POManager(page)
    const homepage= pomanager.getHomepage()

    await homepage.goTo()
    await homepage.clickRegisterLink()

    const registerpage = pomanager.getRegistrationPage()
    
    await page.waitForTimeout(2000)

    //const registerpage = new RegistrationPage(page)

    await registerpage.registerUser(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )

    await registerpage.clickOnRegisterButton()

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
    await page.waitForTimeout(2000)
})