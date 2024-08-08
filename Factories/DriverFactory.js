import 'dotenv/config'
import { Builder, Browser } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'

const getDriver = (browser) => {
  let driver;
  let options;

  switch (browser) {
    case 'firefox':
      driver = new Builder()
        .forBrowser(Browser.FIREFOX)
        .build();
      break;
    case 'edge':
      driver = new Builder()
        .forBrowser(Browser.EDGE)
        .build();
      break;
    case 'chrome':
    default:
      options = new chrome.Options()
      options.addArguments('--headless=new')
      driver = new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();
      break;
  }

  return driver;
};

export default getDriver;
