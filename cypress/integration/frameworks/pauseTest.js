/// <reference types="Cypress" /> 
describe('Framework practice test', function() 
{ 
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })   
    })

    it('custom cypress commands',function() {
        cy.visit(this.data.angularUrl);
        cy.get(':nth-child(2) > .nav-link').click()

        //command to pause the test
        cy.pause()
        this.data.productName.forEach(element => {
            cy.selectProduct(element).debug()   //command to debug            
        });

        
        
    })

})