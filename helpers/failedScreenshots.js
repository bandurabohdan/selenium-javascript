import fs from 'fs'
import path from 'path';

const failedScreenshotMaker = async (test, driver) => {

  if(test.state !== 'failed') {
    return
  }

  if(!fs.existsSync('./failedScreenshots')){
    fs.mkdirSync('./failedScreenshots', { recursive: true })
  }

  let screenshot = await driver.takeScreenshot()
  fs.writeFileSync(path.join('./failedScreenshots', `${test.title}_${Date.now()}.png`), Buffer.from(screenshot, 'base64'))

}

export default failedScreenshotMaker;
