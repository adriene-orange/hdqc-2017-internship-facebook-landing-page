import webdriver from 'selenium-webdriver';
import { expect } from 'chai';
import landing from './landing';

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// const landing = require('./landing')(driver);
const landingPage = landing(driver);

before(() => landingPage.navigate());

it('navigates to the page', () => {
  expect(driver.navigate().to('https://jonnyohjonnyo.github.io/hdqc-2017-internship-facebook-landing-page/'));
});

it('renders a facebook logo', () => {
  expect(landingPage.findLogo()).to.be.good;
});
