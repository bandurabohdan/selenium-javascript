import 'dotenv/config'
import {Builder, Browser} from 'selenium-webdriver'

const getDriver = (browser) => {
  let driver;

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
      driver = new Builder()
        .forBrowser(Browser.CHROME)
        .build();
      break;
  }

  return driver;
};

export default getDriver;
