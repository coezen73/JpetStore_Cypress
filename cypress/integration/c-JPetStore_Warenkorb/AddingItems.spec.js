import { petstoreURL } from "../../support/authentication.constant"
var data = require('../../fixtures/sideBar.json')

describe('Sidebar Functionalities Check', () => {

  beforeEach("Navigate to Jpetstore.com ", () => {

    cy.visit(petstoreURL)
    cy.pageLogin()
  })


  it('Add items from Dog Module to Shopping Cart', () => {
    cy.wait(500)
    cy.get('[src="../images/dogs_icon.gif"]').click()
    cy.url().should('include','/actions/Catalog.action?viewCategory=&categoryId=DOGS')
    cy.wait(500)
    cy.contains('K9-DL-01').click() 
    cy.wait(500)

    cy.contains('EST-9').click()  
    const text = 'Spotless Male Puppy Dalmation'   
    expect(text).to.eq('Spotless Male Puppy Dalmation')
    cy.wait(500)

    cy.get('[class="Button"]').click()
    cy.get('#Cart').should('be.visible')
    cy.wait(500)

    cy.get('[name="EST-9"]').clear().type('2')
    cy.get('[name="updateCartQuantities"]').click()
    cy.get('[name="EST-9"]').should('have.value','2')
    cy.wait(500)

    cy.get('[href="/actions/Order.action?newOrderForm="]').click()
    cy.get('[method="post"]').should('be.visible')
    cy.wait(500)

    cy.Add_Payment_Details()
    
  })
 
})