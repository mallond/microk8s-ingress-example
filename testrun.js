const webdriver = require('selenium-webdriver');
// Input capabilities
const capabilities = {

}
async function runSampleTest () {
  let driver;
  try {
    driver = new webdriver.Builder().
      usingServer('http://10.152.183.186:4444/wd/hub').
      withCapabilities(capabilities).build();
    await driver.get('http://www.google.com');
  
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
