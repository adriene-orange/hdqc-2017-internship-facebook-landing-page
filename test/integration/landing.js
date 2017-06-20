import webdriver from 'selenium-webdriver';

const By = webdriver.By;
const until = webdriver.until;

export default function (driver) {
  const elements = {
    headerLogo: By.css('.logo'),
    loginElements: By.css('.loginElements'),
    toggleLabel: By.css('.toggle-label'),
    mobileLoginElements: By.css('.mobile-loginElements'),
    usernameInput: By.css('.input-form'),
    passwordInput: By.css('.input-form:nth-child(2) input'),
    loginButton: By.css('.form-text .button'),
    homePage: By.css('.list-header'),
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
    findToggleElement() {
      return driver.findElement(elements.toggleLabel).isDisplayed();
    },
    clickLogin() {
      return driver.findElement(elements.toggleLabel).click();
    },
    findMobileLogin() {
      return driver.findElement(elements.mobileLoginElements).isDisplayed();
    },
    findUsernameInput() {
      return driver.findElement(elements.usernameInput).isDisplayed();
    },
    // enterLoginInput() {
    //   if (this.findMobileLogin()) {
    //     driver.findElement(elements.usernameInput).sendKeys('hdqc');
    //   }
    //   // driver.findElement(elements.passwordInput).sendKeys('hdqc');
    //   // driver.wait(until.elementLocated(loginButton));
    //   // driver.findElement(elements.loginButton).click();
    //   // return findHomePage();
    // },
    // findHomePage() {
    //   return driver.findElement(elements.homePage).getText();
    // },
  };
}
