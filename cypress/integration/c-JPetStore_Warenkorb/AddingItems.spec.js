import { petstoreURL } from "../../support/authentication.constant"
var data = require('../../fixtures/sideBar.json')
describe('Sidebar Functionalities Check', () => {

  beforeEach("Navigate to Jpetstore.com ", () => {

    cy.visit(petstoreURL)
    cy.pageLogin()
  })

  it('Side Bar Check', () => {

    cy.wait(500)
    cy.get('#SidebarContent').each((element, index) => {
      cy.log('element: ', element.text())
      const text = element.text()
      expect(text).to.contain(data.SideBarContent[index])
     

    })

  })

  it('Add items from Dog Module to Shopping Cart', () => {
    cy.wait(500)
    cy.get('[src="../images/dogs_icon.gif"]').click()
    cy.url().should('include','/actions/Catalog.action?viewCategory=&categoryId=DOGS')
    cy.contains('K9-DL-01').click() 
    cy.wait(500)
    cy.contains('EST-9').click()  
    const text = 'Spotless Male Puppy Dalmation'   
    expect(text).to.eq('Spotless Male Puppy Dalmation')
    // From here => click'K9-DL-01'-> click(EST-9), -> add to chart  -> assert exist /  Shopping Chart:-> click proceed to 'check out' -> 
    // Fill out the form with fake info -> click continue -> click confirm -> prove the Payment details are exist (Thank you, your order has been submitted)..
    // -> click 'return to main menu' -> Assert 'Welcome ABC!' exist... finish the test!!
  })

})