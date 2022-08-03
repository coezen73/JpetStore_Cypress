import { petstoreURL } from "../../support/authentication.constant"
//var data = require('')

describe('JpetStore, My Account-Page Test ', () => {

  beforeEach("Navigate to Jpetstore.com ", () => {
    cy.visit(petstoreURL)
    cy.pageLogin()
  })

  it('Go to My Account page', () => {
    cy.my_Account()
  })

  it('Get the Account Information text list', () => {
    cy.Account_Info_Text()

  })

  it('Check the functions of My Account Page', () => {
    cy.Account_Info_Adding()

  })

})






