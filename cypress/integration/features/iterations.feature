Feature: Todo Iterations
	as a user
	I want to test differents iterations

	Background:
		Given User configure the execution before the scenarios

	@iterations
	Scenario: Test differents interactions 
		Given User navigates to url with delay
		Then User does double click over option "secondStep"
		And User does mouse over "secondStep"
