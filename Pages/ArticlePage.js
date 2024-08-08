import { faker } from "@faker-js/faker";
import BasePage from "./BasePage.js";
import { expect } from "chai";

class ArticlePage extends BasePage {

  constructor(driver){
    super(driver)
    this.driver = driver
    this.articleTitle = faker.lorem.slug({ min: 1, max: 3})
    this.articleDescription = faker.lorem.sentence({ min: 1, max: 3})
    this.articleBody = faker.lorem.paragraph({ min: 1, max: 3})
  }

  async enterArticleData(){
    await this.write('input[placeholder="Article Title"]', this.articleTitle)
    await this.write(`input[placeholder="What's this article about?"]`, this.articleDescription)
    await this.write('textarea[placeholder="Write your article (in markdown)"]', this.articleBody)

    return this.articleTitle
  }

  async clickPublishArticle(){
    await this.click('button[type="button"]')
  }

  async publishArticle(){
    await this.enterArticleData()
    await this.clickPublishArticle()

    return this.articleTitle
  }

  async publishArticleUsingAPI(token) {
    let response = await fetch(`${process.env.BASE_API_URL}/articles`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': `Token ${token}`},
      body: JSON.stringify({
        article: {
          title: this.articleTitle,
          description: this.articleDescription,
          body: this.articleBody,
          tagList: []
        }
      })
    })

    response = await response.json()

    const { slug, title, description, body, tagList, author } = response.article

    expect(slug).to.contains(this.articleTitle.toLowerCase())
    expect(title).to.eq(this.articleTitle.toLowerCase())
    expect(description).to.eq(this.articleDescription)
    expect(body).to.eq(this.articleBody)
    expect(tagList).to.be.an('array').that.is.empty
    expect(author.username).to.eq(process.env.USERNAME)

  }
}

export default ArticlePage;
