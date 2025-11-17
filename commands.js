/**
 * Custom Cypress Commands
 * 
 * This file contains reusable custom commands that extend Cypress functionality.
 * Commands defined here are available across all test files.
 */

/**
 * Login Command
 * 
 * Performs complete login flow including navigation and form submission.
 * 
 * @param {string} username - The username to login with
 * @param {string} password - The password to login with
 * 
 * @example
 * cy.login('standard_user', 'secret_sauce')
 */
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

// Note: This custom command is defined for potential use in advanced tests
// The basic tests intentionally use native Cypress commands to demonstrate
// foundational skills before introducing custom command patterns
