import { Homepage } from './Homepage'
import { RegistrationPage } from "./RegistrationPage"
import { LoginPage } from "./LoginPage"

export class POManager
{
    constructor(page)
    {
        this.page=page
        this.homepage=new Homepage(this.page)
        this.registerpage=new RegistrationPage(this.page)
        this.loginpage=new LoginPage(this.page)
    }

    getHomepage()
    {
        return this.homepage
    }

    getRegistrationPage()
    {
        return this.registerpage
    }

    getLoginPage()
    {
        return this.loginpage
    }
}