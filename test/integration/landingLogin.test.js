import webdriver from 'selenium-webdriver';
import { expect } from 'chai';
import landing from './landing';

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// const Dimension = webdriver.Dimension();
const landingPage = landing(driver);

before(() => landingPage.navigate());

describe('landing page header', () => {
  it('navigates to the page', () => {
    expect(landingPage.navigate()).to.be.ok;
  });

  it('renders a facebook logo', () => {
    expect(landingPage.findLogo()).to.be.ok;
  });
  it('finds toggle button components in the content if screen size is mobile', () => {
    driver.manage().window().setSize(414, 736);
    // console.log(landingPage.findLoginElements());
    landingPage.findMobileLogin()
      .then(state => expect(state).to.be.true);
  });
  it('removes login component if screen size is mobile', () => {
    driver.manage().window().setSize(414, 736);
    // console.log(landingPage.findLoginElements());
    landingPage.findLoginElements()
      .then(state => expect(state).to.be.false);
    // console.log(landingPage.findLoginElements());
  });
});
