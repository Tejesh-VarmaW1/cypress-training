//static dropdown - options in this are fixed and displayed.
//dynamic dropdown - option in this are displayed based on input.
/// <reference types="cypress"/>
describe('Practice test', function() {
    it('dynamic dropdown', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==="India"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value',"India")

    })
})
