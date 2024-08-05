import ArticlePage from "../Pages/ArticlePage.js";
import HomePage from "../Pages/HomePage.js";
import ProfilePage from "../Pages/ProfilePage.js";
import SignInPage from "../Pages/SignInPage.js";
import SignUpPage from "../Pages/SignUpPage.js";

class PageFactory {

  constructor(driver){
    this.driver = driver
  }

  getHomePage() {
    return new HomePage(this.driver)
  }

  getSignUpPage() {
    return new SignUpPage(this.driver)
  }

  getSignInPage(){
    return new SignInPage(this.driver)
  }

  getArticlePage(){
    return new ArticlePage(this.driver)
  }

  getProfilePage(){
    return new ProfilePage(this.driver)
  }
}

export default PageFactory;
