import getDriver from "./Factories/DriverFactory.js";
import PageFactory from "./Factories/PageFactory.js"
import failedScreenshotMaker from "./helpers/failedScreenshots.js";

describe('Test suit for conduit', () => {

  let driver;
  let pageFactory;
  let homePage;
  let signInPage;

  beforeEach('Build driver, page factory and navigato to base url', async function() {
    const currentTtitle = this.currentTest.title

    driver = await getDriver('chrome')
    pageFactory = new PageFactory(driver)

    if(currentTtitle.includes('API')) {
      return
    }

    homePage = pageFactory.getHomePage()
    signInPage = pageFactory.getSignInPage()
    await homePage.navigateTo(process.env.BASE_URL)

    if(!currentTtitle.includes('Sign up') && !currentTtitle.includes('Sign in')) {
      await homePage.openSignInPage()
      await signInPage.login()
    }
  })

  afterEach(async function() {
    await failedScreenshotMaker(this.currentTest, driver)
    await driver.quit()
  })

  it('Sign up new user', async () => {
    const signUpPage = pageFactory.getSignUpPage()

    await homePage.openSignUpPage()
    await signUpPage.register()
  })

  it('Sign in with existing user', async () => {
    const signInPage = pageFactory.getSignInPage()

    await homePage.openSignInPage()
    await signInPage.login()
  })

  it('Create article', async () => {
    const articlePage = pageFactory.getArticlePage()
    const profilePage = pageFactory.getProfilePage()

    await homePage.openArticlePage()
    const articleTitle = await articlePage.publishArticle()
    await homePage.openProfilePage()
    await profilePage.isArticleAdded(articleTitle)
  })

  it.only('Login with API', async () => {
    const signInPage = pageFactory.getSignInPage()
    const articlePage = pageFactory.getArticlePage()

    // const token = await signInPage.loginUsingAPI()
    await articlePage.publishArticleUsingAPI(token)
  })
})
