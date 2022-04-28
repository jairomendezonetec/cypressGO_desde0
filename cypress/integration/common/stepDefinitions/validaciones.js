/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`User validates the text {string}`, (option) => {
	cy.get('label').should('have.text', option)
});

Given(`User validates CSS`, (datatable) => {
	let data = datatable.rawTable;

	console.log(data)
	console.log(data[0][1])
	data.forEach((row) => {
		console.log('hola')
		cy.get('label').should('have.css', row[0], row[1]);
	});
	
});


Given(`User checks a new todo {string}`, (option) => {
	cy.xpath(`//*[text()='${option}']/preceding-sibling::input`).click()
});

Given(`User validates that toDo list is empty`, () => {
	cy.contains('Clear').click();
	cy.get('.todo-list').should('not.have.descendants', 'li')
});

Given(`User validates the list`, (datatable) => {
	let data = datatable.rawTable;

	cy.get('label').then( element =>{
		expect(element[0]).to.contain.text(data[0])
		expect(element[1]).to.contain.text(data[1])
	})
});
