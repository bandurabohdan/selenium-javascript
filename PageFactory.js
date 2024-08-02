import HomePage from "./pages/HomePage.js";
import SignUpPage from "./pages/SignUpPage.js";

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
