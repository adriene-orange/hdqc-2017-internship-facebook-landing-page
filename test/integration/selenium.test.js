import { expect } from 'chai';

const webdriver = require('selenium-webdriver');
const until = webdriver.until;

const By = webdriver.By;
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


describe('it is fake facebook', () => {
  it('should have a logo', () => {
    driver.navigate().to('https://jonnyohjonnyo.github.io/hdqc-2017-internship-facebook-landing-page/');
    driver.findElement(By.css('.input-form:nth-child(1) input')).sendKeys('hdqc');
    driver.findElement(By.css('.input-form:nth-child(2) input')).sendKeys('hdqc');
    driver.wait(until.elementLocated(By.css('.form-text .button')));
    driver.findElement(By.css('.form-text .button')).click()
    return driver.findElement(By.css('.list-header')).getText()
      .then(header => expect(header).to.equal('Interests'));
  });

  it('selects book from list', () => {
    driver.findElement(By.css('.list-item:nth-child(1) a')).click();
    driver.wait(until.elementLocated(By.css('.detail .detail-header')));
    return driver.findElement(By.css('.detail .detail-header')).getText()
      .then(header => expect(header).to.equal('Art'));
  });

  it('tests for loading screen', () => {
    return driver.findElement(By.css('.detail .detail-header + div')).getText()
      .then(selected => expect(selected).to.equal('Loading...'));
  });

  it('tests for api result', () => {
    driver.wait(until.elementLocated(By.css('div div a img')));
    return driver.findElement(By.css('div div a img'))
      .then(selected => expect(selected).to.be.ok);
  });

  it('logs out correctly', () => {
    driver.findElement(By.css('.logout')).click();
    driver.wait(until.elementLocated(By.css('.landing')));
    return driver.findElement(By.css('.landing'))
      .then(selected => expect(selected).to.be.ok);
  });

  after((done) => {
    driver.quit()
    .then(() => done())
  });
});

// ask the browser to open a page

    // expect(driver.findElement(By.css('.list-header'))).to.have.length(1);
    // expect(driver.findElement(By.css('.list-header'))).to.equal(true);
    // const header = driver.findElement(By.css('.list-header'));
    // console.log(header);
    // expect(driver.findElement(By.css('.list-header'))).to.be.defined;
