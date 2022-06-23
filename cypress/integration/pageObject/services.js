/// <reference types="cypress" />

import EnvironmentsPage from "./environment";
import MenuPage from "./menu";

class ServicesPage {

	/***
	 * Intercepta la petición y la devuelve como si el servicio hubiera fallado
	 */
	proyectFailServices() {
		cy.intercept({
			method: 'GET',
			url: '/clients'
		}, {
			forceNetworkError: true
		}).as('proyectsFail');

		cy.get(`input[value='Acceder']`).click();

		cy.wait('@proyectsFail', { timeout: 20000 }).should('have.property', 'error');
	}


	/***
	 * Modifica la respuesta interceptada
	 */
	proyectServices() {
		cy.intercept({
			method: 'GET',
			url: '/clients'
		}, (req) => {

			req.reply((res) => { //reply, modifica la respuesta y devuelve como si fuera el propio servicio
				console.log("Respuesta: ", res); // muestra la respuesta devuelta por el servicio
				res.body.name = 'TestingQA'; // modifica el valor name del body por "Jairo"
				return res;
			}
			)
		}).as('proyects');

		cy.get(`input[value='Acceder']`).click();

		cy.wait('@proyects', { timeout: 20000 }).then((response) => {
			expect(response.response.statusCode).to.eq(200);
			expect(response.response.body.projects).to.length(4);
			expect(response.response.body.name).to.contain("TestingQA");
		})
			.its('response.statusCode')
			.should('eq', 200);
	}

	/***
	 * Modifica la respuesta del servicio con los datos almacenados en la carpeta fixture
	 */
	environmentsServices() {

		cy.intercept({
			method: 'GET',
			url: '/reports/resume?client=L%C3%ADnea%20Directa%20-%20Backend',
		}).as('proyects2');

		cy.get(`input[value='Acceder']`).click();

		cy.wait('@proyects2', { timeout: 20000 }).then((response) => {
			expect(response.response.statusCode).to.eq(200);
			expect(response.response.body.reports).to.length(1);
			console.log(response.response.body.reports[0].passed);
			let value = response.response.body.reports[0].passed
			expect(value).to.eq(3);
		})
	}
}
export default ServicesPage;