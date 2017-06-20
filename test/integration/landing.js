import webdriver from 'selenium-webdriver';

const By = webdriver.By;
const until = webdriver.until;

export default function (driver) {
  const elements = {
    headerLogo: By.css('.logo'),
  };

  return {
    url: 'https://jonnyohjonnyo.github.io/hdqc-2017-internship-facebook-landing-page/',
    elements,
    navigate() {
      driver.navigate().to(this.url);
      return this.findLogo();
    },
    findLogo() {
      return driver.wait(until.elementLocated(elements.headerLogo));
    },
  };
}
