import getDriver from "./DriverFactory.js";
import PageFactory from "./PageFactory.js"

describe('Test suit for conduit', () => {

  let driver;
  let pageFactory;

  before(async () => {
    driver = await getDriver('chrome')
    pageFactory = new PageFactory(driver)
  })

  it('Sign up new user', async () => {
    const homePage = pageFactory.getHomePage()
    const signUpPage = pageFactory.getSignUpPage()

    await homePage.navigateTo(process.env.BASE_URL)
    await homePage.openSignUpPage()
    await signUpPage.enterSignUpData()
    await signUpPage.clickSignUpButton()
    await signUpPage.quitDriver()
  })
})
