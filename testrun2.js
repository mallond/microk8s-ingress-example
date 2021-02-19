
const GRID_HOST = 'http://10.152.183.186:4444/wd/hub';

const webdriver = require('selenium-webdriver');
// Input capabilities
const capabilities = {
 'os_version' : '10',
 'resolution' : '1920x1080',
 'browserName' : 'Chrome',
 'browser_version' : 'latest',
 'os' : 'Linux',
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
  } catch (e) {
    console.log('from the code',e);
  } finally {
    if(driver) {
      await driver.quit();
    }
  }
}
runSampleTest(); 
