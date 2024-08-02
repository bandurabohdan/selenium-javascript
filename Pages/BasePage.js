import { By, until } from "selenium-webdriver";

class BasePage {

  constructor(driver) {
    this.driver = driver
  }

  async navigateTo(link) {
    await this.driver.get(link)
  }

  async getElement(locator) {
    const getBy = locator[0] === '/' ? By.xpath : By.css

    let element = await this.driver.wait(until.elementLocated(getBy(locator)), 10000)
    element = await this.driver.wait(until.elementIsVisible(element), 10000)
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);

    return element
  }

  async getElements(locator) {
    const getBy = locator[0] === '/' ? By.xpath : By.css

    let elements = await this.driver.wait(until.elementsLocated(getBy(locator)))
    await this.driver.wait(until.elementIsVisible(elements[0]))
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", elements[0]);

    return elements
  }

  async click(locator) {
    const element = await this.getElement(locator)
    await element.click()
  }

  async write(locator, text) {
    const element = await this.getElement(locator)
    await element.sendKeys(text)
  }

  async quitDriver() {
    await this.driver.quit()
  }
}

export default BasePage;
