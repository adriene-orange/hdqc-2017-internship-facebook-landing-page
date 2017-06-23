import { expect } from 'chai';
const chai = require('chai');
const webdriver = require('selenium-webdriver');
const until = webdriver.until;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const By = webdriver.By;
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


describe('fake facebook can', () => {
  it('logs in', () => {
    driver.navigate().to('https://jonnyohjonnyo.github.io/hdqc-2017-internship-facebook-landing-page/');
    driver.findElement(By.css('.input-form:nth-child(1) input')).sendKeys('hdqc');
    driver.findElement(By.css('.input-form:nth-child(2) input')).sendKeys('hdqc');
    driver.wait(until.elementLocated(By.css('.form-text .button')));
    driver.findElement(By.css('.form-text .button')).click();

    return Promise.all([
      expect(driver.findElement(By.css('.list-header')).getText()).to.eventually.equal('Interests'),
    //   expect(driver.findElement(By.css('.left-header h1')).isDisplayed()).to.eventually.be.false,
    ]);

    // return driver.findElement(By.css('.list-header')).getText()
    //   .then(header => expect(header).to.equal('Interests'));

    // driver.findElement(By.css('.landing')).isDisplayed()
    //   .then(header => expect(header).to.be.false);

    // return driver.findElement(By.css('.list-header')).getText()
    //   .then(
    //     function (header) {
    //       console.log('a headdddddder', header);
    //       expect(header).to.equal('Interests')
    //     });
  });


  it('select an interest from the list', () => {
    driver.findElement(By.css('.list-item:nth-child(1) a')).click();
    driver.wait(until.elementLocated(By.css('.detail .detail-header')));
    return driver.findElement(By.css('.detail .detail-header')).getText()
      .then(header => expect(header).to.equal('Art'));
  });

  it('display a loading screen after selection', () => {
    return driver.findElement(By.css('.detail .detail-header + div')).getText()
      .then(selected => expect(selected).to.equal('Loading...'));
  });

  it('display api result', () => {
    driver.wait(until.elementLocated(By.css('div div a img')));
    return driver.findElement(By.css('div div a img'))
      .then(selected => expect(selected).to.be.ok);
  });

  it('log out correctly', () => {
    driver.findElement(By.css('.logout')).click();
    driver.wait(until.elementLocated(By.css('.landing')));
    // return driver.findElement(By.css('.landing'))
    //   .then(selected => expect(selected).to.be.ok);

    return driver.findElement(By.css('.landing')).isDisplayed()
      .then(selected => expect(selected).to.be.true);

    // return Promise.all([
    //   expect(driver.findElement(By.css('.landing')).isDisplayed()).to.eventually.be.true,
    //   expect(driver.findElement(By.css('.detail')).isDisplayed()).to.eventually.be.false,
    //   // expect(driver.findElement(By.css('.left-header h1'))).to.eventually.be.false,
    // ]);
  });

  after((done) => {
    driver.quit()
    .then(() => done())
  });
});
