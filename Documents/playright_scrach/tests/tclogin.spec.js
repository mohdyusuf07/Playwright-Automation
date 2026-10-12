import { POManager } from '../pageObjects/POManager'
import { customtest as test, expect } from  '../fixture/testfixture'

test('login',async({page, testdataForregistration})=>

{
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomepage()
    const loginpage=pomanager.getLoginPage()
    await homepage.goTo()

    await loginpage.clickToApplication(
        testdataForregistration.username,
        testdataForregistration.password
    )
    await loginpage.clickOnloginButton()
}
)