/// <reference types="Cypress" /> 
describe('Practice test', function() 
{ 
    it('child window',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(el){
                const url = el.prop('href')
                cy.log('url')
                cy.visit('url')
        })
    })

})

