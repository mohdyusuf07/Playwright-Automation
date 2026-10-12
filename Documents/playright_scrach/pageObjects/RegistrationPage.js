export class RegistrationPage {

    constructor(page) {

        this.page = page

        this.firstName = page.locator("//input[@id='customer.firstName']")
        this.lastName = page.locator("//input[@id='customer.lastName']")
        this.address = page.locator("//input[@id='customer.address.street']")
        this.city = page.locator("//input[@id='customer.address.city']")
        this.state = page.locator("//input[@id='customer.address.state']")
        this.zipcode = page.locator("//input[@id='customer.address.zipCode']")
        this.phone = page.locator("//input[@id='customer.phoneNumber']")
        this.ssn = page.locator("//input[@id='customer.ssn']")
        this.username = page.locator("//input[@id='customer.username']")
        this.password = page.locator("//input[@id='customer.password']")
        this.confirm = page.locator("//input[@id='repeatedPassword']")
        this.registerButton = page.locator("//input[@value='Register']")
    }

    async registerUser(fname, lname, address, city, state, zipcode, phone, ssn, username, password) {

        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.address.fill(address)
        await this.city.fill(city)
        await this.state.fill(state)
        await this.zipcode.fill(zipcode)
        await this.phone.fill(phone)
        await this.ssn.fill(ssn)
        await this.username.fill(username)
        await this.password.fill(password)
        await this.confirm.fill(password)
    }

    async clickOnRegisterButton() {
        await this.registerButton.click()
    }
}