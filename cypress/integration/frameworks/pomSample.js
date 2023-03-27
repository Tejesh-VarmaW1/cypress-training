/// <reference types="Cypress" /> 
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

describe('Framework practice test', function() 
{ 
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })   
    })

    it('custom cypress commands',function() {

        const homePage = new HomePage;
        const productPage = new ProductPage;
        
        cy.visit(Cypress.env("url")+"/angularpractice/");

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEnterpreneur().should('be.disabled')


        homePage.getShopTab().click()
        this.data.productName.forEach(element => {
            cy.selectProduct(element)      
        });

        productPage.getCheckoutButton().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            const actualText = $el.text()
            var res = actualText.split(" ")
            res = res[1].trim()
            cy.log(res)
            sum = Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const actualText = element.text()
            var res = actualText.split(" ")
            res = res[1].trim()
            expect(Number(res)).to.equal(sum)
        })



        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        Cypress.config('defaultCommandTimeout',8000)

        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('form.ng-untouched > .btn').click()
        cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })

})