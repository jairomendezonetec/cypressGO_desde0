Feature: TestingGO
	as a user
	I want to test differents validationes with Page Object

	@testingGO @pageObject_001
	Scenario: TestingGO e2e con creación de comandos
		Given El usuario "jairo" realiza login con comandos
		And El usuario accede al entorno: "Training"
		And El usuario accede a la feature
		And El usuario accede al caso
		And El usuario hace logout

	
