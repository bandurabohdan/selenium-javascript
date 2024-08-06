import fs from 'fs'
import path from 'path';
import { attachment } from 'allure-js-commons'

const failedScreenshotMaker = async (test, driver) => {

  if(test.state !== 'failed') {
    return
  }

  const screenshotName = `${test.title}_${Date.now()}.png`

  if(!fs.existsSync('./failedScreenshots')){
    fs.mkdirSync('./failedScreenshots', { recursive: true })
  }

  let screenshot = await driver.takeScreenshot()
  fs.writeFileSync(path.join('./failedScreenshots', screenshotName), Buffer.from(screenshot, 'base64'))

  attachment(screenshotName, fs.readFileSync(`./failedScreenshots/${screenshotName}`), 'image/png')

}

export default failedScreenshotMaker;
