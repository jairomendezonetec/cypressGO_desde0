import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(`User configure the execution before the scenarios`, () => {
	console.log("User configure the execution before the scenarios")
});


Given(`User navigates to url`, () => {
	cy.visit('http://todomvc-app-for-testing.surge.sh/')
});

When(`User adds a new todo to the list`, () => {
	cy.get('.new-todo').type('Clean room{enter}')
	cy.get('.toggle').click()
	cy.contains('Clear completed').click()
});
