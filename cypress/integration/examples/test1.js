//cypress - Spec
// import utilities from "../../../utilities.json";
/// <reference types="cypress"/>
describe('Navigate >> Get searchbar >> Enter value', function() {
    it.skip('case 1', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('cucumber')
    })

    it('Navigate >> Get searchbar >> Enter value >> Assert elements', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // cy.get('.product).should('have.length',4)
        cy.get('.products').as('productlocator');
        // cy.get('.product:visible').should('have.length',4)  //This nd below line does same work
        cy.get('@productlocator').find('.product').should('have.length',4)    //This is an example of parent child chaining
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()  //By using this, elements under the get locator are only selected. That is child under parent

        //Following steps iterates over the elements fetched and do the process mentioned
        //The difference b/w above nd this mthd is that whether the position of the product changes also
        //The below method works nd above mentioned fails
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })

        //asserting the text
        cy.get('.brand').should('have.text','GREENKART')
    })
})

// cy.readFile('../../support/utilities.json').then((data) => {
//     let url = utilities.url;
//     cy.visit(url);
// });