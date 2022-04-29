

import { When } from "cypress-cucumber-preprocessor/steps";
import FeaturesPage from "../../../pageObject/features.js";

const featuresPage = new FeaturesPage();

When(`El usuario accede a la feature`, () => {
	featuresPage.accederAVerPruebas();
});

When(`El usuario accede al caso`, () => {
	featuresPage.accederACaso();
});

When(`El usuario abre y cierra la captura`, () => {
	featuresPage.accederAImagen();
});


When(`El usuario accede a estadisticas de la feature {string}`, (env) => {
	featuresPage.accesoEstadisticas(env);
	
  });

