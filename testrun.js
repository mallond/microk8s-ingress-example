var chrome = require('selenium-webdriver/chrome');

var driver = new webdriver.Builder()
.forBrowser('chrome')
.usingServer('http://10.152.183.186:4444/wd/hub')
.build();

driver.get('https://www.softpost.org');

driver.quit();ls
