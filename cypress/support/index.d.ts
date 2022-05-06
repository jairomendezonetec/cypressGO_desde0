declare namespace Cypress {
	interface Chainable {
		/**
		 * Borra y escribe el texto, si este no es nulo
		 * @param element Elemento donde se realizará la acción 
		 * @param text Texto a escribir sobre el elemento
		 * @example cy.fillInput('#idToFound', 'texto a escribir en el elemento')
		 */
		fillInput(element:string, text:string): Chainable<Element>
	}
}