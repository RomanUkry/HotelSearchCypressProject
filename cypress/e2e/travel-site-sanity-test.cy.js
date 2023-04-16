///<reference types = "Cypress"/>
describe('The sanity test suite for travel site', () => {
  it('navigate to the main page', () => {
    cy.visit('http://localhost:3000')
    cy.url ().should('eq', 'http://localhost:3000/')
  })

  it('verify tabs of the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="Hotels"]').should("be.visible")
    cy.get('[data-cy="Car"]').should("be.visible")
    cy.get('[data-cy="Flight"]').should("be.visible")
  })

  it('verify text of the tabs of the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="Hotels"]').should("have.text","hotels")
    cy.get('[data-cy="Car"]').should("have.text","car")
    cy.get('[data-cy="Flight"]').should("have.text","flight")
  })

  it('verify checkboxes on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.checkbox-row > .m-r-45').should("be.visible")
    cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
  })

  it('verify search button on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#tab1 > form > .btn-submit').should("be.visible")
    cy.contains('search').should("be.visible")
    cy.get('[type="submit"]').should("be.visible")
  })
})
