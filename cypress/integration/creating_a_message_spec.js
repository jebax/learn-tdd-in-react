describe('Creating a message', () => {
  it('Displays the message in a list', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-test="messageText"]')
      .type('New message')

    cy.get('[data-test="sendButton"]')
      .click()

    cy.get('[data-test="messageText"]')
      .should('have.value', '')

    cy.contains('New message')
  })
})