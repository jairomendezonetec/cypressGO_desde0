import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(`User configure the execution before the scenarios`, () => {
	console.log("User configure the execution before the scenarios")
});


Given(`User navigates to url`, () => {
	cy.visit('http://todomvc-app-for-testing.surge.sh/') // sigue funcionando con 3 segundos
});

When(`User adds a new todo {string} to the list`, (option) => {
	cy.get('.new-todo').type(`${option}{enter}`); 
});


