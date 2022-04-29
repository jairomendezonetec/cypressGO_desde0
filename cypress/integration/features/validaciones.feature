Feature: To Do Validations
	as a user
	I want to test differents validationes

	Background:
		Given User configure the execution before the scenarios

	@validaciones
	Scenario: Validate text
		Given User navigates to url
		When User adds a new todo "validaciones" to the list
		Then User validates the text "validaciones"

	@validaciones
	Scenario: Validate CSS
		Given User navigates to url
		When User adds a new todo "validaciones" to the list
		Then User checks a new todo "validaciones" 
		Then User validates CSS
			|text-decoration-line| line-through |
		Then User validates that toDo list is empty

	@validaciones
	Scenario: Validate CSS
		Given User navigates to url
		When User adds a new todo "validaciones" to the list
		Then User checks a new todo "validaciones" 
		Then User validates that toDo list is empty

	@validaciones
	Scenario: Multiple validations
		Given User navigates to url
		When User adds a new todo "validación 1" to the list
		When User adds a new todo "validación 2" to the list
		Then User validates the list	
			|validación 2|
			|validación 1|