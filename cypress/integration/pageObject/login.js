/// <reference types="cypress" />
import * as userData from './../data/users.json';


class LoginPage {

	/**
	 * Realiza el login con el usuario desde un fichero de datos
	 * @param user Usuario a buscar en el fichero json
	 */
	login(user, service = true) {
		cy.visit(`${Cypress.env('testingGO')}`);
		const userData = this.getUser(user);

		if (userData.username !== "")
			cy.get("#userEmail").clear().then(() => {
				if (userData.username) cy.get("#userEmail").type(userData.username);
			});
		cy.get("#userPassword").clear().then(() => {
			if (userData.password) cy.get("#userPassword").type(userData.password);
		});
		if (service)
			cy.get(`input[value='Acceder']`).click();
	}

	/**
	 * Realiza el logout
	 */
	logOut() {
		cy.xpath("//button[./span[text()='Salir']]").click();
	}

	/**
	 * Obtiene los datos del usuario
	 * @param user Usuario a buscar en el fichero json
	 */
	getUser(user) {
		cy.wrap(user).as("user");

		cy.get("@user").then((text) => console.log("Usuario: ", text));

		for (let index = 0; index < userData.users.length; index++) {
			if (userData.users[index].nickname == user)
				return userData.users[index];
		}
	}

	checkServices() {
		cy.intercept({
			method: 'GET',
			url: '/clients'
		}, (req) => {

			req.reply((res) => {
				console.log("hola", res)
				res.body.name = 'Jairo'
				return res;
			}
			)
		}).as('proyects');

		cy.wait('@proyects', { timeout: 10000 }).then((response) => {
			expect(response.response.statusCode).to.eq(200);
			expect(response.response.body.projects).to.length(3);
		})
			.its('response.statusCode')
			.should('eq', 200);


		cy.intercept({
			method: 'GET',
			url: '/reports/resume?client=Impulsyn_Android',
		}, {
			fixture: 'environment.json'
		}).as('proyects2');

		cy.wait('@proyects2', { timeout: 10000 }).then((response) => {
			expect(response.response.statusCode).to.eq(200);
			expect(response.response.body.reports).to.length(2);
		})
			.its('response.statusCode')
			.should('eq', 200);
	}

	/**
	 * Realiza el login con el usuario desde un fichero de datos y con comandos creados
	 * @param user Usuario a buscar en el fichero json
	 */
	loginCommands(user, service = false) {
		cy.visit(`${Cypress.env('testingGO')}`);

		const userData = this.getUser(user);

		cy.fillInput("#userEmail", userData.username);
		cy.fillInput("#userPassword", userData.password);

		if (!service)
			cy.get(`input[value='Acceder']`).click();
	}

}
export default LoginPage;