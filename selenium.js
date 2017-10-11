require('chromedriver');
const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();


webdriver.get('http://google.com')
    .then(() => webdriver.close());
