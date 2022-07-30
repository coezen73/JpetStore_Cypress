
import {username, password,wrongUsername,wrongPassword } from './authentication.constant'


Cypress.Commands.add('pageLogin', () => {

    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.wait(500)
    cy.get('input[name="username"]').clear().type(username)
    cy.get('input[name="password"]').clear().type(password)
    cy.get('input[name="signon"]').click()
    expect('#SidebarContent').to.exist

})

Cypress.Commands.add('Wrong_Username_Testing', () => {

    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear().type(wrongUsername)
    cy.get('input[name="password"]').clear().type(password)
    cy.get('input[name="signon"]').click()
    cy.get('.messages').should('have.text','Invalid username or password.  Signon failed.')

})

Cypress.Commands.add('Wrong_Password_Testing', () => {

    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear().type(username)
    cy.get('input[name="password"]').clear().type(wrongPassword)
    cy.get('input[name="signon"]').click()
    cy.get('.messages').should('have.text','Invalid username or password.  Signon failed.')
})

Cypress.Commands.add('Wrong_Username_And_Password_Testing', () => {

    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear().type(wrongUsername)
    cy.get('input[name="password"]').clear().type(wrongPassword)
    cy.get('input[name="signon"]').click()
    cy.get('.messages').should('have.text','Invalid username or password.  Signon failed.')


})

Cypress.Commands.add('Empty_Password_Field_Test', () => {

    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear().type(username)
    cy.get('input[name="password"]').clear()
    cy.get('input[name="signon"]').click()
    cy.get('#SidebarContent').should('not.be.exist')

})

Cypress.Commands.add('Empty_Username_Field_Test', () => {

    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear()
    cy.get('input[name="password"]').clear().type(password)
    cy.get('input[name="signon"]').click()
    cy.get('#SidebarContent').should('not.be.exist')
  
})

Cypress.Commands.add('Empty_Username_And_Password_Field_Test', () => {

    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="signon"]').click()
    cy.get('#SidebarContent').should('not.be.exist')

})

Cypress.Commands.add('my_Account', ()=>{

    
    cy.contains('My Account').click()   
    expect('#Content').to.exist
    
    })

    Cypress.Commands.add('Account_Info_Text',()=>{

        cy.wait(500)
        cy.get().each((element, index) => { 
        cy.log('element: ', element.text())     
        const text = element.text()           
        expect(text).to.contain(data.AccountInformation[index]) 
           
    })
    
  })
    
      
    