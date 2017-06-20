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

  it('renders home page after a successful login', () => {
    landingPage.findUsernameInput()
      .then(() => console.log('....sent username'));

    landingPage.findPasswordInput()
      .then(() => console.log('....sent password'));

    landingPage.findLoginButton().submit()
      .then(() => console.log('....submitted'));

    // return driver.wait(until.elementsLocated(landingPage.findHomePage())
    //   .then(state => expect(state).to.be.true));
  });
});

// describe('Login test', () => {
//
// });
