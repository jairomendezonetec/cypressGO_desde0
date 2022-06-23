/// <reference types="cypress" />
class MenuPage {

	//selectores
	
	porcentaje (env, text) { return `//*[text()='${env}']/../..//*[contains(text(),'${text}')]`};
	boton(env, text){return `//*[text()='${env}']/../..//*[text()='${text}']`};

	//métodos

	/***
	 * Accede a una opción del entorno a través del menú lateral
	 * @param option opción a seleccionar
	 * @param env entonrno sobre el que realizar la acción
	 */
	accessTo(option, env){

		cy.contains('a,','Entornos').click()
		cy.contains('a,', env).click()
		cy.contains('div.sidebar-subsubmenu.active a',option).click()

		let page = "";
		
		switch (option) {
			case 'Estadísticas':
				page = 'stadistics';
				break;
			case 'Ultima ejecución':
				page = 'last-execution';
				break;
			case 'Historial de ejecuciones':
				page = 'history-execution';
				break;
			default:
				break;
		}

		
		cy.url().should('eq', `https://testingapp.grupoonetec.com/#/main/${page}`);

	}
	
}
export default MenuPage;