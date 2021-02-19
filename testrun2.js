var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
            .usingServer('http://10.152.183.186:4444/wd/hub')
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'webdriver - Google Search';
 });
}, 1000);

driver.quit();
