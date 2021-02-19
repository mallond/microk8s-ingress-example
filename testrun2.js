
const GRID_HOST = 'http://10.152.183.186:4444/wd/hub';


const { Builder, Capabilities } = require("selenium-webdriver");
var capabilities = Capabilities.firefox();
(async function helloSelenium() {
    let driver = new Builder()
        .usingServer(GRID_HOST)   
        .withCapabilities(capabilities)
        .build();
    try {
        await driver.get('https://www.google.com');
    } finally {
        await driver.quit();
    }
})();  
