/// <reference types="Cypress" />

// describe('Mobile phone replenishment', () => {

//    it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
// });

// }

// it('By ID', () => {
//    cy.visit("http://www.facebook.com/")
//    cy.get('#email')
// });    

// it('By Class', () => {
//    cy.visit('https://docs.cypress.io/api/table-of-contents')
//    cy.contains('button[type="button"]')
// });    

// it('By Tag', function () {
//   cy.visit('https://docs.cypress.io/api/commands/get#Syntax');
//    cy.get('nav');
// });    

// it('By Tag value', function () {
//    cy.visit('http://www.facebook.com');
//    cy.get('[name="pass"]');
// }); 
    
// it('By Diffent Tag', function () {
//       cy.visit('http://www.facebook.com');
//        cy.get('[data-testid="open-registration-form-button"][role="button"]');
//    });        

// it('By Diffent Types', function () {   
//    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
//    cy.get('button[type="button"][title="close banner"]');
// });    

// it('By Contains name', () => {
//    cy.visit('https://next.privat24.ua/')
//    cy.get('[class^="card"]')
// });  

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1000, 660)
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});  

it('Using Get with Find and Eq', () => {
    cy.viewport(1500, 800)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('aside').find('ul').find('li').find('a').eq(0)
});  