

class FeaturesPage {

	//Selectores
	buttonFeature(feature, text) { return `//*[text()='${feature}']/../../..//*[text()='${text}']/..` }
	status(type) { return `(//*[contains(@class, 'summary--${type}')]/span)[3]` }
	getNombre() { return `//table[@class='passed']//td` };

	//metodos

	/***
	* Método para acceder a ver las pruebas
	*/
	accederAVerPruebas() {

		cy.xpath(this.status('OK')).invoke('text').as('pasados');
		cy.xpath(this.status('KO')).invoke('text').as('fallados');

		cy.get('@pasados').then((text) => console.log("pasados feature: ", text));
		cy.get('@fallados').then((text) => console.log("fallados feature: ", text));

		cy.contains(`Ver pruebas`).eq(0).click();
	}

	/***
	 * Método para acceder a ver el caso
	 */
	accederACaso() {
		cy.xpath(this.getNombre()).eq(0).invoke('text').as('nombre_caso');
		cy.contains(`Ver detalle`).click();
		cy.get('@nombre_caso').then((text) => {
			cy.contains(text.trim()).should('be.visible');
		})
	}

	/***
	 * Método para acceder a ver la imagen y cerrarla
	 */
	accederAImagen() {
		cy.get(`.icon-camera-1`).click({ force: true });
		cy.get(`button[title='Close modal']`).click();
	}

	/***
	 * Método para acceder a las estadisticas
	 */
	accesoEstadisticas(feature) {
		cy.xpath(this.buttonFeature(feature, "Estadísticas")).click();
		cy.url().should('eq', `${Cypress.env('testingGO')}main/stadistics`);

	}

}
export default FeaturesPage;