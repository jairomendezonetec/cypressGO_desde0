/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(`User navigates to url with delay`, () => {
	// cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000') // sigue funcionando con 3 segundos
	cy.visit(`${Cypress.env('toDoURL')}?delay-new-todo=5000`) // No funcionaría por defecto con 5 segundos debido a que Cypress espera 4 segundos por elemento.
});

When(`User does double click over option {string}`, (option) => {
	cy.get('.new-todo', {timeout: 6000}).type(`${option}{enter}`); //funcionará aumentando el timeout del objeto
	cy.contains(option).dblclick();
	cy.get(`input[value='${option}'][class='edit']`, {timeout: 6000}).type(`{enter}`);
});

Given(`User does mouse over {string}`, (option) => {
	cy.xpath(`//*[text()='${option}']/following-sibling::button[@class='destroy']`).should('not.be.visible'); //Comprobando que no es visible
	cy.xpath(`//*[text()='${option}']/following-sibling::button[@class='destroy']`).invoke('show'); //invocando la visibilidad del elemento
	cy.xpath(`//*[text()='${option}']/following-sibling::button[@class='destroy']`).should('be.visible'); //Comprobando que es visible
});