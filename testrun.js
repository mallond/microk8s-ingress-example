const webdriver = require('selenium-webdriver');
// Input capabilities
const capabilities = {
 'device' : 'iPhone 11',
 'realMobile' : 'true',
 'os_version' : '14.0',
 'browserName' : 'iPhone',
 'name': 'BStack-[NodeJS] Sample Test', // test name
 'build': 'BStack Build Number 1', // CI/CD job or build name
 'browserstack.user' : 'YOUR_USERNAME',
 'browserstack.key' : 'YOUR_ACCESS_KEY'
}
async function runSampleTest () {
  let driver;
  try {
    driver = new webdriver.Builder().
      usingServer('http://hub-cloud.browserstack.com/wd/hub').
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
