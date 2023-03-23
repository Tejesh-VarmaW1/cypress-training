/// <reference types="Cypress" /> 
import 'cypress-iframe'

describe('Practice test', function() 
{ 
    it('frames',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")  // command to switch to certain frma

        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

        cy.iframe().find("a[href*='mentorship']").eq(0).click() //load the frame

    })

})