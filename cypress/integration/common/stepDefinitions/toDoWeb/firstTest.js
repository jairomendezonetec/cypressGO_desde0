/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(`User configure the execution before the scenarios`, () => {
	console.log("User configure the execution before the scenarios")
});


Given(`User navigates to url`, () => {
	cy.visit(Cypress.env('toDoURL')) // sigue funcionando con 3 segundos
});

When(`User adds a new todo {string} to the list`, (option) => {
	cy.get('.new-todo', {timeout: 6000}).type(`${option}{enter}`); //funcionará aumentando el timeout del objeto
});


