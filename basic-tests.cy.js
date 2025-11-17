/// <reference types='cypress' />

/**
 * SauceDemo - Basic Login Tests
 * 
 * Foundational Cypress tests demonstrating core commands and assertions.
 * Tests cover login page validation, field interactions, and authentication flows.
 */

describe('Login Page Basic Tests', () => {

    beforeEach(() => {
        // Navigate to login page and clear any existing session data
        cy.visit('https://www.saucedemo.com/')
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })

    it('should display correct page title', () => {
        // Validate browser tab title
        cy.title().should('eq', 'Swag Labs')
    })

    it('should display username and password fields', () => {
        // Verify login fields are visible and empty by default
        cy.get('#user-name').should('be.visible').and('have.value', '')
        cy.get('#password').should('be.visible').and('have.value', '')
    })

    it('should display login button with correct text', () => {
        // Verify login button is visible and has correct label
        cy.get('#login-button').should('be.visible').and('contain', 'Login')
    })

    it('should display test credentials on page', () => {
        // Verify page shows available test usernames and password
        cy.contains('Accepted usernames are:').should('be.visible')
        cy.contains('standard_user').should('be.visible')
        cy.contains('Password for all users:').should('be.visible')
        cy.contains('secret_sauce').should('be.visible')
    })

    it('should allow typing and clearing input fields', () => {
        // Test field interaction - type and clear
        cy.get('#user-name').type('standard_user').clear()
        cy.get('#password').type('secret_sauce').clear()
    })

    it('should show error when submitting empty form', () => {
        // Validate error message appears for empty credentials
        cy.get('#login-button').click()
        cy.get('h3[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username is required')
    })

    it('should login successfully with valid credentials', () => {
        // Test successful login flow
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        // Verify redirect to inventory page
        cy.url().should('contain', 'inventory')
    })

    it('should show error with invalid credentials', () => {
        // Test failed login with wrong credentials
        cy.get('#user-name').type('standard_users')
        cy.get('#password').type('secret_sauces')
        cy.get('#login-button').click()
        
        // Verify error message appears
        cy.get('h3[data-test="error"]')
            .should('be.visible')
            .and('contain', 'do not match')
    })
})
