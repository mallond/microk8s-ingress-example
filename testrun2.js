var webdriver = require('selenium-webdriver');
const GRID_HOST = 'http://10.152.183.186:4444/wd/hub';

const capabilities = {
    platform: 'windows 10',
    browserName: 'chrome',
    version: '67.0',
    resolution: '1280x800',
    network: true,
    visual: true,
    console: true,
    video: true,
    name: 'Test 1', // name of the test
    build: 'NodeJS build' // name of the build
}
    
const driver = new webdriver.Builder()
        .usingServer(GRID_HOST)
        .withCapabilities(capabilities)
        .build();
 
 // navigate to a url, search for a text and get title of page
 driver.get('https://www.google.com/ncr').then(function() {
     driver.findElement(webdriver.By.name('q')).sendKeys('LambdaTest\n').then(function() {
         driver.getTitle().then(function(title) {
             setTimeout(function() {
                 console.log(title);
                 driver.quit();
             }, 5000);
         });
     });
 });
