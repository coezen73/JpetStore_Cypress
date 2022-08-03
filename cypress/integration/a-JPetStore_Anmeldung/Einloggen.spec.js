import { petstoreURL} from "../../support/authentication.constant"
//var data = require('')

describe('JpetStore Anmeldetest', () => {

  beforeEach("Navigate to Jpetstore.com ", () => {
    cy.visit(petstoreURL)
  })
  
  it("Login with valid user credentials", () => {
    cy.pageLogin()

  })
  it('Wrong username, right password, Negative Testing', () => {
    cy.Wrong_Username_Testing()

  })

  it('Right username, wrong password, Negative Testing', () => {
    cy.Wrong_Password_Testing()

  })

  it('Wrong username, wrong password, Negative Testing', () => {
    cy.Wrong_Username_And_Password_Testing()

  })

  it('Blank password box, Negative Testing ', () => {
    cy.Empty_Password_Field_Test()

  })

  it('Blank username box, Negative Testing ', () => {
    cy.Empty_Username_Field_Test()

  })

  it('Blank username-password box, Negative Testing ', () => {
    cy.Empty_Username_And_Password_Field_Test()

  })

  











})
