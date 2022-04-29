class EnvironmentsPage {

	//selectores
	porcentaje (env, text) { return `//*[text()='${env}']/../..//*[contains(text(),'${text}')]`};
	boton(env, text){return `//*[text()='${env}']/../..//*[text()='${text}']`};

	//metodos

	/***
	 * Método para acceder al detall de un entorno
	 * @param env Entorno al que se quiere acceder
	 */
	accederADetalle(env){
		//Obtengo los valores de los porcentajes de pasados y fallados
		cy.xpath(this.porcentaje(env, "Pasados"), {timeout: 10000}).invoke('text').as('pasados');
		cy.xpath(this.porcentaje(env, "Fallados")).invoke('text').as('fallados');

		//Muestro los datos obtenidos
		cy.get('@pasados').then((text) => console.log("pasados: ",text.split(" ")[1].trim()));
		cy.get('@fallados').then((text) => console.log("fallados: ",text.split(" ")[1].trim()));

		//Accedo a más detalle
		cy.xpath(this.boton(env, "Más detalle")).click();
		
	}

	/***
	 * Método para acceder a las estadisticas
	 * @param env Entorno al que se quiere acceder
	 */
	accederAEstadisticas(env) {
		cy.xpath(this.boton(env, "Ver estadísticas")).click();
		cy.url().should('eq', `${Cypress.env('testingGO')}main/stadistics`); // compruebo que la url es la correcta
	}

	/***
	 * Elige el proyecto en el selector del menu
	 * @param proyecto Proyecto al que se quiere acceder
	 */
	elegirProyecto(proyecto){
		cy.get('#projectName1').select(proyecto); //Selecciono en el desplegable que opción quiero
	}
	
}
export default EnvironmentsPage;