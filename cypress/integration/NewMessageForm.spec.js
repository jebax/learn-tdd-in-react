import React from 'react';
import { mount } from 'cypress-react-unit-test';
import NewMessageForm from '../../src/NewMessageForm';

describe('<NewMessagForm />', () => {
  describe('clicking the send button', () => {
    beforeEach(() => {
      mount(<NewMessageForm />)

      cy.get('[data-test="messageText"]')
        .type('New Message')

      cy.get('[data-test="sendButton"]')
        .click()
    })

    it('clears the text field', () => {
      cy.get('[data-test="messageText"]')
        .should('have.value', '')
    })
  })
})
