import { When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./../../../pageObject/login.js";

const url = "https://github.com";
const loginPage = new LoginPage();

When(`El usuario hace logout`, () => {
	loginPage.logOut();
  });

When(`El usuario {string} realiza login`, user => {
  loginPage.login(user);
});

