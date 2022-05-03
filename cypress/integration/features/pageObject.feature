Feature: TestingGO
	as a user
	I want to test differents validationes with Page Object

	@testingGO @pageObject_001
	Scenario: TestingGO e2e
		Given El usuario "jairo" realiza login
		And El usuario accede al entorno: "PRE"
		And El usuario accede a la feature
		And El usuario accede al caso
		And El usuario hace logout

	@testingGO @pageObject_002
	Scenario: Probar opciones de menu: Historial de ejecuciones
		Given El usuario "jairo" realiza login
		When El usuario accede a "Historial de ejecuciones" del entorno "PRE"

	@testingGO @pageObject_003
	Scenario: Probar opciones de menu: Última ejecución
		Given El usuario "jairo" realiza login
		When El usuario accede a "Ultima ejecución" del entorno "PRE"

	@testingGO @pageObject_004
	Scenario: Probar opciones de menu: Estadísticas
		Given El usuario "jairo" realiza login
		When El usuario accede a "Estadísticas" del entorno "PRE"
