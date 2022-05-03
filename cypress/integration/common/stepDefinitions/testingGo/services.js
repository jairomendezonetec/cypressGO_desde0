import { When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pageObject/login.js";
import ServicePage from "./../../../pageObject/services.js";

const servicePage = new ServicePage();
const loginPage = new LoginPage();

When(`El usuario comprueba las respuestas del servicio tras el login`, () => {
	loginPage.login("jairo", true);
	servicePage.proyectServices();
  });

  When(`El usuario comprueba una petición erronea tras el login`, () => {
	loginPage.login("jairo", true);
	servicePage.proyectFailServices();
  });

  When(`El usuario modifica la respuesta del servicio tras el login`, () => {
	loginPage.login("jairo", true);
	servicePage.environmentsServices();
  });
  
