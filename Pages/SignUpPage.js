import BasePage from "./BasePage.js";
import { faker } from '@faker-js/faker';

class SignUpPage extends BasePage {

  constructor(driver){
    super(driver)
    this.driver = driver
  }

  async enterSignUpData(){
    await this.write('input[placeholder="Username"]', `${faker.person.firstName()}_${faker.person.lastName()}`)
    await this.write('input[placeholder="Email"]', `${faker.person.lastName()}@gmail.com`)
    await this.write('input[placeholder="Password"]', faker.person.lastName())
  }

  async clickSignUpButton() {
    await this.click('button[type="submit"]')
  }

}

export default SignUpPage;
