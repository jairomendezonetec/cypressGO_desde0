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

When(`Realizo los pasos previos a todos los casos`, () => {
	console.log("Realizo los pasos previos a todos los casos")
  });

  When(`Comprobamos mensaje {string}`, (mensaje) => {
	console.log(`Comprobamos mensaje ${mensaje}`);
	loginPage.comprobarMensaje(mensaje);
  });