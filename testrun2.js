
const GRID_HOST = 'http://10.152.183.186:4444/wd/hub';

const webdriver = require('selenium-webdriver');
// Input capabilities
const capabilities = {
 'os_version' : '10',
 'resolution' : '1920x1080',
 'browserName' : 'Chrome',
 'browser_version' : 'latest',
 'os' : 'Windows',
 'name': 'BStack-[NodeJS] Sample Test', // test name
 'build': 'BStack Build Number 1', // CI/CD job or build name
 'browserstack.user' : 'YOUR_USERNAME',
 'browserstack.key' : 'YOUR_ACCESS_KEY'
}
async function runSampleTest () {
  let driver;
  try {
    driver = new webdriver.Builder().
      usingServer(GRID_HOST).
      withCapabilities(capabilities).build();
    await driver.get('http://www.google.com');
    await (await driver.findElement(webdriver.By.name('q'))).sendKeys('BrowserStack\n');
    const title = await driver.getTitle();
    console.log(title);
    // Setting the status of test as 'passed' or 'failed' based on the condition; if title of the web page included 'BrowserStack'
    if(title.includes('BrowserStack')) {
      await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}');
    } else {
      await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Title does not contain BrowserStack!"}}');
    }
  } catch (e) {
    console.log(e);
  } finally {
    if(driver) {
      await driver.quit();
    }
  }
}
runSampleTest(); 
