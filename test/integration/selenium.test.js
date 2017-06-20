const webdriver = require('selenium-webdriver');
const By = webdriver.By;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// ask the browser to open a page
driver.navigate().to('http://path.to.test.app/');