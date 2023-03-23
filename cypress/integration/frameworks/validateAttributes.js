/// <reference types="Cypress" /> 
describe('Framework practice test', function() 
{ 
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })   
    })

    it('hooks',function() {
        cy.visit(this.data.angularUrl)
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4)> .ng-untouched').should('have.value',this.data.name)

        //the following method is for validating certain attribute in the DOM - method 1    //method 2 is by using prop. shown in examples/childWindow.js
        //'have.attr' helps us in acheiving this
        //syntax is .should('have.attr','attribute_name','attribute_value')
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')

        //validating the disabled checkbox
        //'be.disabled' checks box is disabled or not
        cy.get('#inlineRadio3').should('be.disabled')

        
    })

})