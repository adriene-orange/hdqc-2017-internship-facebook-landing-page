import webdriver from 'selenium-webdriver';

const By = webdriver.By;
const until = webdriver.until;

export default function (driver) {
  const elements = {
    headerLogo: By.css('.logo'),
    loginElements: By.css('.loginElements'),
    toggleLabel: By.css('.toggle-label'),
    mobileLoginElements: By.css('.mobile-loginElements'),
    usernameInput: By.name('username'),
    passwordInput: By.name('password'),
    loginButton: By.css('.form-text .button'),
    homePage: By.css('.home'),
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
      console.log('.......1');
      driver.wait(until.elementLocated(elements.usernameInput));
      driver.findElement(elements.usernameInput).isDisplayed().then(state => console.log('...username found:', state));
      return driver.findElement(elements.usernameInput);
    },
    findPasswordInput() {
      console.log('.......2');
      driver.findElement(elements.passwordInput).isDisplayed().then(state => console.log('...password found:', state));
      return driver.findElement(elements.passwordInput);
    },
    findLoginButton() {
      console.log('.......3');
      driver.findElement(elements.loginButton).isDisplayed().then(state => console.log('...submit found:', state));
      return driver.findElement(elements.loginButton);
    },
    findHomePage() {
      console.log('.......4');
      return driver.findElement(elements.homePage);
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
