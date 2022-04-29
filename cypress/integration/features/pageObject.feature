Feature: TestingGO
	as a user
	I want to test differents validationes

	Background:
		Given User configure the execution before the scenarios

  @testingGO @ultimasEjecuciones_001
  Scenario: TestingGO e2e
    Given El usuario "jairo" realiza login
    And El usuario accede al entorno: "PRE"
	And El usuario accede a la feature
	And El usuario accede al caso
	# And El usuario abre y cierra la captura