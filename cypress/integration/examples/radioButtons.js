/// <reference types="cypress"/>
describe('Practice test', function() {
    it('radio button', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[value="radio2"]').check().should('be.checked')

    })
})
