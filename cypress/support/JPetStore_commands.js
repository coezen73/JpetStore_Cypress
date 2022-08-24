
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

// Adding Items:

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

Cypress.Commands.add('Add_Payment_Details', () => {

    //Handling with Dropdown Buttons:

    cy.get('[name="order.cardType"]').select('American Express')
    cy.get('[value="American Express"]').should('be.visible')

    // Filling the blanks:
    
    cy.contains('Card Number').click()
    const Text = '1112 2223 3334 4445 5556'
    cy.get('[name="order.creditCard"]').clear().type(Text)
    expect(Text).to.eq('1112 2223 3334 4445 5556')
  
    cy.contains('First name:').click()
    const Text1 = 'Queen'
    cy.get('[name="order.billToFirstName"]').clear().type(Text1)
    expect(Text1).to.eq('Queen')
   
    cy.contains('Last name:').click()
    const Text2 = 'Elizabeth II'
    cy.get('[name="order.billToLastName"]').clear().type(Text2)
    expect(Text2).to.eq('Elizabeth II')
   
    cy.contains('Address 1:').click()
    const Text3 = 'SW1A 1AA Backhingam Palace'
    cy.get('[name="order.billAddress1"]').clear().type(Text3)
    expect(Text3).to.eq('SW1A 1AA Backhingam Palace')
  
    cy.contains('Address 2:').click()
    const Text4 = 'Mayfair 01'
    cy.get('[name="order.billAddress2"]').clear().type(Text4)
    expect(Text4).to.eq('Mayfair 01')
  
    cy.contains('City:').click()
    const Text5 = 'London'
    cy.get('[name="order.billCity"]').clear().type(Text5)
    expect(Text5).to.eq('London')
    
    cy.contains('State:').click()
    cy.get('[name="order.billState"]').clear()
    cy.get('[name="order.billState"]').should('have.value','')
  
    cy.contains('Zip:').click()
    const Text6 = 'SW1A'
    cy.get('[name="order.billZip"]').clear().type(Text6)
    expect(Text6).to.eq('SW1A')
   
    cy.contains('Country:').click()
    const Text8 = 'United Kingdom'
    cy.get('[name="order.billCountry"]').clear().type(Text8)
    expect(Text8).to.eq('United Kingdom')

    // Check box:

    cy.wait(500)
    cy.get('[name="shippingAddressRequired"]').check().should('be.checked')

    cy.wait(1000)
    cy.get('[name="newOrder"]').click()
    cy.url().should('include', '/actions/Order.action')

    // Shipping Address Filling:

    cy.contains('First name:').click()
    const text1 = 'Cemil'
    cy.get('[name="order.shipToFirstName"]').clear().type(text1)
    expect(text1).to.eq('Cemil')
  
    cy.contains('Last name:').click()
    const text2 = 'Oezen'
    cy.get('[name="order.shipToLastName"]').clear().type(text2)
    expect(text2).to.eq('Oezen')
    
    cy.contains('Address 1:').click()
    const text3 = 'Roesrather Str. 1'
    cy.get('[name="order.shipAddress1"]').clear().type(text3)
    expect(text3).to.eq('Roesrather Str. 1')
   
    cy.contains('Address 2:').click()
    cy.get('[name="order.shipAddress2"]').clear()
    cy.get('[name="order.shipAddress2"]').should('have.value','')
    
    cy.contains('City:').click()
    const text4 = 'Koeln'
    cy.get('[name="order.shipCity"]').clear().type(text4)
    expect(text4).to.eq('Koeln')
    
    cy.contains('State:').click()
    const text5 = 'NRW'
    cy.get('[name="order.shipState"]').clear().type(text5)
    expect(text5).to.eq('NRW')
    
    cy.contains('Zip:').click()
    const text6 = '11130'
    cy.get('[name="order.shipZip"]').clear().type(text6)
    expect(text6).to.eq('11130')
   
    cy.contains('Country:').click()
    const text7 = 'Deutschland'
    cy.get('[name="order.shipCountry"]').clear().type(text7)
    expect(text7).to.eq('Deutschland')

    cy.wait(1000)
    cy.get('[name="newOrder"]').click()
    cy.url().should('include', '/actions/Order.action')

    cy.wait(1000)
    cy.get('.Button').contains('Confirm').click()
    cy.get('h1').should('have.text', 'HTTP Status 500 – Internal Server Error')

  
    
})
