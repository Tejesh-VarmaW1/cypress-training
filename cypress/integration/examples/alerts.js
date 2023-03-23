// Cypress auto accepts alerts and popups
// Cypress have capability to browser events
// by triggering window:alert event catches the popup

/// <reference types="Cypress" /> 
describe('Practice test', function() 
{ 
    it('Alerts',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

})