

import { When } from "cypress-cucumber-preprocessor/steps";
import EnvironmentsPage from "./../../../pageObject/environment.js";
import MenuPage from "./../../../pageObject/menu.js";

const environmentsPage = new EnvironmentsPage();
const menuPage = new MenuPage();

When(`El usuario accede al entorno: {string}`, (env) => {
	environmentsPage.accederADetalle(env);
});

When(`El usuario accede a estadisticas del entorno {string}`, (env) => {
	environmentsPage.accederAEstadisticas(env);
});

When(`El usuario selecciona el proyecto {string}`, (project) => {
	environmentsPage.elegirProyecto(project);
});

When(`El usuario accede a {string} del entorno {string}`, (option, env) => {
	menuPage.accessTo(option, env);
});