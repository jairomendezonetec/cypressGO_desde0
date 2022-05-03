Feature: TestingGO - Services
	as a user
	I want to test differents validationes

	Background:
		Given User configure the execution before the scenarios


	@testingGO @servicesFail
	Scenario: TestingGO - Test services failing
		And El usuario comprueba una petición erronea tras el login

	@testingGO @services
	Scenario: TestingGO - Test services validations
		And El usuario comprueba las respuestas del servicio tras el login

	@testingGO @servicesChanged
	Scenario: TestingGO - Test services modified
		And El usuario modifica la respuesta del servicio tras el login