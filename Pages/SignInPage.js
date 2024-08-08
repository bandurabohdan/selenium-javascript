import { expect } from "chai";
import BasePage from "./BasePage.js";

class SignInPage extends BasePage {

  constructor(driver) {
    super(driver)
    this.driver = driver
  }

  async enterSignInData() {
    await this.write('input[placeholder="Email"]', process.env.USER_EMAIL)
    await this.write('input[placeholder="Password"]', process.env.USER_PASSWORD)
  }

  async clickSignInButton() {
    await this.click('button[type="submit"]')
  }

  async login() {
    await this.enterSignInData()
    await this.clickSignInButton()
    await this.isUserSignedIn(process.env.USERNAME)
  }

  async loginUsingAPI() {

    let response = await fetch(`${process.env.BASE_API_URL}/users/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: {
          email: process.env.USER_EMAIL,
          password: process.env.USER_PASSWORD
        }
      })
    })

    response = await response.json()

    const { username, email, token } = response.user

    expect(username).to.eq(process.env.USERNAME)
    expect(email).to.eq(process.env.USER_EMAIL)
    expect(token).to.be.a('string')

    return token
  }
}

export default SignInPage
