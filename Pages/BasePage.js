import { By, until } from "selenium-webdriver";
import { expect } from "chai";
import { step } from 'allure-js-commons'

class BasePage {

  constructor(driver) {
    this.driver = driver
  }

  async navigateTo(link) {
    await step(`Navigate to ${link}`, async () => {
      await this.driver.get(link)
    })
  }

  async isUserSignedIn(userName){
    const userNameNavLink = await this.getText('a.nav-link[href^="/profile"]')
    expect(userNameNavLink.toLowerCase()).to.eq(userName.toLowerCase())
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

    let elements = await this.driver.wait(until.elementsLocated(getBy(locator)), 10000)
    await this.driver.wait(until.elementIsVisible(elements[0]), 10000)
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", elements[0]);

    return elements
  }

  async getElementByText(text) {
    let element = await this.driver.wait(until.elementLocated(By.xpath, `//*[contains(text(), ${text})]`))
    element = await this.driver.wait(until.elementIsVisible(element), 10000)
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);

    return element
  }

  async click(locator) {
    await step(`Click on element ${locator}`, async() => {
      if(typeof(locator) !== 'string') {
        await locator.click()
        return
      }
      const element = await this.getElement(locator)
      await element.click()
    })
  }

  async write(locator, text) {
    await step(`Type in element ${locator} text - ${text}`, async() => {
      if(typeof(locator) !== 'string') {
        await locator.sendKeys(text)
        return
      }
      const element = await this.getElement(locator)
      await element.sendKeys(text)
    })
  }

  async getText(locator) {
    let element;
    let result;

    await step(`Get text from element ${locator}`, async() => {
      if(typeof(locator) !== 'string') {
        await this.driver.wait(until.elementTextMatches(locator, /\S+/), 10000)
        result = await locator.getText()
        return
      }
      element = await this.getElement(locator)
      await this.driver.wait(until.elementTextMatches(element, /\S+/), 10000)
      result = await element.getText()
    })

    return result
  }

  async quitDriver() {
    await this.driver.quit()
  }
}

export default BasePage;
