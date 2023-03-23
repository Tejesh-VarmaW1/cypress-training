/// <reference types="Cypress" /> 
describe('Practice test', function() 
{ 
    it('child tab',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click() // this command get's the html line of opentab window and the it removes the target attribute(which opens in new window), so if we click on tab, the new page opens in same window only
        cy.url().should('include','rahulshetty')
        cy.go('back')
        cy.url().should('include','rahulshettyacademy')

    })

})