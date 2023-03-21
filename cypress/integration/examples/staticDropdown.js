//static dropdown - options in this are fixed and displayed.
//dynamic dropdown - option in this are displayed based on input.
/// <reference types="cypress"/>
describe('Practice test', function() {
    it('concepts practice', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('select').select('option2').should('have.value','option2')

    })
})
