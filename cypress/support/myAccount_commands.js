

Cypress.Commands.add(myAccount, ()=>{

cy.contains('My Account').click()
cy.wait(500)
expect('#Content').to.exist

})
