/// <reference types="Cypress" /> 
describe('Framework practice test', function() 
{ 
    before(function(){
        //we need to read data before tests getting executed
        cy.fixture('example').then(function(data){
            this.data = data//by using this.data we're increasing the scope to global from local for 'data'
        })   
        //this method automatically reads the example.json file which is present in fixtures.
        // now we need to resolve the promise
        //after this 'data' will hold the data present in example.json
    })

    it('hooks',function() {
        //hardcoding
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("input[name='name']:nth-child(2)").type("Tejesh")
        cy.get('select').select("Male")
        
        //getting data from json placed in fixtures
        cy.visit(this.data.angularUrl)
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get('select').select(this.data.gender)
    })

})