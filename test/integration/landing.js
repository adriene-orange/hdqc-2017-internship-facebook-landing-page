import webdriver from 'selenium-webdriver';

const By = webdriver.By;
const until = webdriver.until;

export default function (driver) {
  const elements = {
    headerLogo: By.css('.logo'),
    loginElements: By.css('.loginElements'),
    toggleLabel: By.css('.toggle-label'),
    mobileLoginElements: By.css('.mobile-loginElements'),
  };

  return {
    url: 'https://jonnyohjonnyo.github.io/hdqc-2017-internship-facebook-landing-page/',
    elements,
    navigate() {
      return driver.navigate().to(this.url);
    },
    findLogo() {
      return driver.wait(until.elementLocated(elements.headerLogo));
    },
    findLoginElements() {
      return driver.findElement(elements.loginElements).isDisplayed();
    },
    findMobileLogin() {
      return driver.findElement(elements.toggleLabel).isDisplayed();
    },
  };
}
