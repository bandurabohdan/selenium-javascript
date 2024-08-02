import BasePage from "./BasePage.js";

class HomePage extends BasePage {

  constructor(driver){
    super(driver)
    this.driver = driver
  }

  async openSignUpPage(){
    await this.click('a[href="/user/register"]')
  }

}

export default HomePage;
