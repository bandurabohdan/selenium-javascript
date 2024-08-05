import BasePage from "./BasePage.js";
import { faker } from '@faker-js/faker';

class SignUpPage extends BasePage {

  constructor(driver){
    super(driver)
    this.driver = driver
    this.firstName = faker.person.firstName()
    this.lastName = faker.person.lastName()
    this.userName = `${this.firstName}_${this.lastName}`
  }

  async enterSignUpData(userName, lastName){
    await this.write('input[placeholder="Username"]', userName)
    await this.write('input[placeholder="Email"]', `${lastName}}@gmail.com`)
    await this.write('input[placeholder="Password"]', lastName)
  }

  async clickSignUpButton() {
    await this.click('button[type="submit"]')
  }

  async register(){
    await this.enterSignUpData(this.userName, this.lastName)
    await this.clickSignUpButton()
    await this.isUserSignedIn(this.userName)
  }

}

export default SignUpPage;
