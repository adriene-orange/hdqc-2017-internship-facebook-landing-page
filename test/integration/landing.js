import webdriver from 'selenium-webdriver';

const By = webdriver.By;
const until = webdriver.until;

export default function (driver) {
  const elements = {
    headerLogo: By.css('.logo'),
    loginElements: By.css('.loginElements'),
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
      return driver.wait(until.elementIsNotVisible(elements.loginElements));
    },
  };
}
