import webdriver from 'selenium-webdriver';
import { expect } from 'chai';
import landing from './landing';

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// const Dimension = webdriver.Dimension();
const landingPage = landing(driver);
const By = webdriver.By;
const until = webdriver.until;

before(() => landingPage.navigate());

describe('landing page header', () => {
  it('navigates to the page', () => {
    expect(landingPage.navigate()).to.be.ok;
  });

  it('renders a facebook logo', () => {
    expect(landingPage.findLogo()).to.be.ok;
  });

  it('removes login component if screen size is mobile', () => {
    driver.manage().window().setSize(414, 736);
    landingPage.findLoginElements()
      .then(state => expect(state).to.be.false);
  });
});

describe('landing page content', () => {
  it('finds a toggle button for login if screen size is mobile', () => {
    driver.manage().window().setSize(414, 736);
    return landingPage.findToggleElement()
      .then(state => expect(state).to.be.true);
  });

  it('does not find a login component until button is clicked', () => {
    driver.manage().window().setSize(414, 736);
    return landingPage.findLoginElements()
      .then(state => expect(state).to.be.false);
  });

  it('finds login form when login button is clicked', () => {
    driver.manage().window().setSize(414, 736);
    landingPage.clickLogin();
    return landingPage.findMobileLogin()
      .then(state => expect(state).to.be.true);
  });
});

describe('Login test', () => {
  it('renders home page after a successful login', () => {
    driver.findElement(By.css('.input-form:nth-child(1) input')).sendKeys('hdqc');
    driver.findElement(By.css('.input-form:nth-child(2) input')).sendKeys('hdqc');
    driver.wait(until.elementLocated(By.css('.form-text .button')));
    driver.findElement(By.css('.form-text .button')).click();
    return driver.findElement(By.css('.list-header')).getText()
      .then(header => expect(header).to.equal('Interests'));
  });
});
