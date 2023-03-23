/// <reference types="Cypress" /> 
describe('Practice test', function() 
{ 
    it('mouse hover',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //using jQuery methods to click on mouse hover
        cy.get('.mouse-hover-content').invoke('show') //we're making the elements visible
        cy.contains('Top').click()      //now verifying whether top is present or not, and clicking on it if present
        cy.url().should('include','top')    
        
        //we know that cypress can click on invisble elements coz it directly interacts with DOM
        //to do this we use following technique
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')    

    })

})