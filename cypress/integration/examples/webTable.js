/// <reference types="Cypress" /> 
describe('Practice test', function() 
{ 
    it('web tables',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){ 
                    const priceText = price.text()    //  ||
                    expect(priceText).to.equal('25')    //  ||
                })                                    //  vv          
                //The above technique is used to move to immediate sibling. As we iterate the array, the index also updates
                //So now we use this indexing technique. 
                //First we get the rows of 2nd columns and extract exactly the row we want using index, i.e., index works as row number we want
                //So by giving next(), the pointer moves to immediate sibling of the element
                //We can't use next() with $el
            }
        })
    })

})