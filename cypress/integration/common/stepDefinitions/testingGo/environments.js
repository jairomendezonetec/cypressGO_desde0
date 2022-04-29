

import { When } from "cypress-cucumber-preprocessor/steps";
import EnvironmentsPage from "./../../../pageObject/environment.js";

const environmentsPage = new EnvironmentsPage();

When(`El usuario accede al entorno: {string}`, (env) => {
  environmentsPage.accederADetalle(env);
  
});

When(`El usuario accede a estadisticas del entorno {string}`, (env) => {
	environmentsPage.accederAEstadisticas(env);
	
  });

  When(`El usuario selecciona el proyecto {string}`, (project) => {
	environmentsPage.elegirProyecto(project);
	
  });

