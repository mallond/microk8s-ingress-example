
const GRID_HOST = 'http://10.152.183.186:4444/wd/hub';

const webdriver = require('selenium-webdriver');
// Input capabilities
const capabilities = {
 'browserName' : 'Chrome',
 'name': 'BStack-[NodeJS] Sample Test', // test name
 'build': 'BStack Build Number 1', // CI/CD job or build name
}
async function runSampleTest () {
  let driver;
  try {
    driver = new webdriver.Builder().
      usingServer(GRID_HOST).
      withCapabilities(capabilities).build();
    await driver.get('http://www.google.com');
  } catch (e) {
    console.log('from the code',e);
  } finally {
    if(driver) {
      await driver.quit();
    }
  }
}
runSampleTest(); 
