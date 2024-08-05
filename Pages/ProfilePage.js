import { expect } from "chai";
import BasePage from "./BasePage.js";

class ProfilePage extends BasePage {

  constructor(driver){
    super(driver)
    this.driver = driver
  }

  async openFavoritesPostsTab() {
    const favoritePostsTab = await this.getElementByText('My Posts')
    await this.click(favoritePostsTab)
  }

  async openMyPostsTab() {
    const myPostsTab = await this.getElementByText('Favorited Posts')
    await this.click(myPostsTab)
  }

  async getArticles() {
    return await this.getElements('div[class="article-preview"]')
  }

  async getArticleTitle(article) {
    return await this.getText(article)
  }

  async isArticleAdded(expectedTtitle) {
    await this.driver.navigate().refresh()
    await this.driver.sleep(1000)
    const articleTitle = await this.getArticleTitle('div[class="article-preview"]:nth-child(2) h1')
    expect(articleTitle.toLowerCase()).to.eq(`article title: ${expectedTtitle.toLowerCase()}`)
  }
}

export default ProfilePage;
