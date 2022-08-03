
import { username, password, wrongUsername, wrongPassword } from './authentication.constant'
var data = require('../fixtures/category.json')

// Login Page Positive and Negative Test Cases

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
    cy.get('.messages').should('have.text', 'Invalid username or password.  Signon failed.')

})

Cypress.Commands.add('Wrong_Password_Testing', () => {


    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear().type(username)
    cy.get('input[name="password"]').clear().type(wrongPassword)
    cy.get('input[name="signon"]').click()
    cy.get('.messages').should('have.text', 'Invalid username or password.  Signon failed.')
})

Cypress.Commands.add('Wrong_Username_And_Password_Testing', () => {

    cy.wait(500)
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains('Sign In').click()
    cy.get('input[name="username"]').clear().type(wrongUsername)
    cy.get('input[name="password"]').clear().type(wrongPassword)
    cy.get('input[name="signon"]').click()
    cy.get('.messages').should('have.text', 'Invalid username or password.  Signon failed.')


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

// My Account Page

Cypress.Commands.add('my_Account', () => {


    cy.contains('My Account').click()
    expect('#Content').to.exist

})

Cypress.Commands.add('Account_Info_Text', () => {

    cy.wait(500)
    cy.contains('My Account').click()
    cy.contains('User Information').should('be.visible')
    cy.contains('User ID').should('be.exist')
    cy.wait(500)
    cy.contains('Account Information').should('be.visible')
    cy.contains('Phone').should('be.exist')
    cy.contains('Email').should('be.exist')
    cy.contains('Address 2:').should('be.exist')
    cy.wait(500)
    cy.contains('Profile Information').should('be.visible')
    cy.contains('Favourite Category').should('be.exist')


})

Cypress.Commands.add('Account_Info_Adding', () => {

    cy.wait(500)
    cy.contains('My Account').click()
    const text = 'New Password'
    cy.get('input[name="password"]').clear().type(text)
    expect(text).to.eq('New Password')

    cy.wait(500)
    const text1 = 'myname@mydomain.com'
    cy.get('[name="account.email"]').clear().type(text1)
    expect(text1).to.eq('myname@mydomain.com')

    cy.wait(500)
    const text2 = '0123 456 7890'
    cy.get('[name="account.phone"]').clear().type(text2)
    expect(text2).to.eq('0123 456 7890')

    cy.wait(500)
    const text3 = '911 Traum Str.'
    cy.get('[name="account.address1"]').clear().type(text3)
    expect(text3).to.eq('911 Traum Str.')

    cy.wait(500)
    const text4 = 'Disneyburg'
    cy.get('[name="account.city"]').clear().type(text4)
    expect(text4).to.eq('Disneyburg')

    cy.wait(500)
    const text5 = 'Neverland'
    cy.get('[name="account.country"]').clear().type(text5)
    expect(text5).to.eq('Neverland')

    //Handling with Dropdown Buttons:

    cy.wait(500)
    cy.get('[name="account.favouriteCategoryId"] > option').each(($el, index) => {
        const text = $el.text()
        expect(text).to.contain(data.FovouriteCategory[index])
        cy.get('[name="account.favouriteCategoryId"]').select($el.text()).should('be.visible')

    })

    // Handling With Checkboxes:

    cy.wait(500)
    cy.get('[name="account.listOption"]').check().should('be.checked')
    cy.wait(500)
    cy.get('[name="account.bannerOption"]').click().should('not.be.checked')

})












