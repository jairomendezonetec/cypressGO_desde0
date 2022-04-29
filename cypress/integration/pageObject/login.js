import * as userData from './../data/users.json';

class LoginPage {

	

	login(user){
		cy.visit(`${Cypress.env('testingGO')}`);

		const userData = this.getUser(user);

		if(userData.username !=="")
		cy.get("#userEmail").clear().then(()=> {
			if(userData.username) cy.get("#userEmail").type(userData.username);
		});
		cy.get("#userPassword").clear().then(()=> {
			if(userData.password) cy.get("#userPassword").type(userData.password);
		});
		cy.get(`input[value='Acceder']`).click();
	}
	

	logOut(){
		cy.xpath("//button[./span[text()='Salir']]").click();
	}

	comprobarMensaje(mensaje) {
		cy.contains(mensaje);
	}

	getUser(user){
		cy.wrap(user).as("user");

		cy.get("@user").then((text)=>console.log("Usuario: " , text));
		
		for (let index = 0; index < userData.users.length; index++) {
			if(userData.users[index].nickname == user)
				return userData.users[index];
		}
	}
	
}
export default LoginPage;