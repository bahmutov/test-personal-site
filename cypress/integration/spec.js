/// <reference types="cypress" />

describe('My personal site', () => {
  it('loads', () => {
    cy.visit('/')
    cy.log('**projects**')
    cy.contains('#projects-count', /^\d+ OSS projects$/).should('be.visible')
    cy.get('#projects li').should('have.length.gt', 100)
      .contains('a', 'draw-cycle') // example projects

    cy.log('**search works**')
    cy.get('#project-search-text').should('be.focused')
      .type('draw-cycle')
    cy.get('#projects li').should('have.length', 1).should('be.visible')
  })

  it('has header links', () => {
    cy.visit('/')
    cy.get('header a').should('have.length.gt', 4)
      // the email link is dynamic to prevent scraping
      .contains('a', 'email').should('have.attr', 'href', '/')
  })
})
