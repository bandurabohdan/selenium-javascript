import HomePage from "../Pages/HomePage.js";
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
}

export default PageFactory;
