
//Test de login cu user sau parola gresita (verifica daca e mesaj de eroare)
describe('Site-ul www.saucedemo.com/', () =>{
    cy.visit('https://www.saucedemo.com');

    cy.get('.username').type('standard_user');
    cy.get('.password').type('secret_sauce');
    cy.get('.login-button').click();


})