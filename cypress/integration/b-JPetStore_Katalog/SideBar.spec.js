import { petstoreURL} from "../../support/authentication.constant"
var data = require('../../fixtures/sideBar.json')
describe('Sidebar Functionalities Check', () => {

    beforeEach("Navigate to Jpetstore.com ", () => {
  
      cy.visit(petstoreURL)
      cy.pageLogin()
    })
  
 it('Side Bar Check',()=>{

    cy.wait(500)
    cy.get('#SidebarContent').each((element, index) => {
        cy.log('element: ', element.text())
        const text = element.text()
        expect(text).to.contain(data.SideBarContent[index])

    })

 })

 it('Check the Fish Module',()=>{

 cy.get('src="../images/fish_icon.gif"').click()

})

})