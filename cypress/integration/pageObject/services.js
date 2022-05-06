/// <reference types="cypress" />
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
				res.body.name = 'Jairo'; // modifica el valor name del body por "Jairo"
				return res;
			}
			)
		}).as('proyects');

		cy.get(`input[value='Acceder']`).click();

		cy.wait('@proyects', { timeout: 20000 }).then((response) => {
			expect(response.response.statusCode).to.eq(200);
			expect(response.response.body.projects).to.length(7);
			expect(response.response.body.name).to.contain("Jairo");
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
			url: '/reports/resume?client=Impulsyn_Android',
		}, {
			fixture: 'environment.json' // La respuesta es almacenada en la carpeta fixture. Es sustituida por la respuesta del servidor
		}).as('proyects2');

		cy.get(`input[value='Acceder']`).click();

		cy.wait('@proyects2', { timeout: 20000 }).then((response) => {
			expect(response.response.statusCode).to.eq(200);
			expect(response.response.body.reports).to.length(2);
		})
			.its('response.statusCode')
			.should('eq', 200);
	}
}
export default ServicesPage;