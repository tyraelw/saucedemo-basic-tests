# 🧪 SauceDemo - Basic Cypress Tests
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![E2E Testing](https://img.shields.io/badge/E2E-Testing-green)

Foundational UI automation project demonstrating core Cypress commands, selectors, and assertion patterns using the SauceDemo login page.

## 📋 Project Overview

This project showcases fundamental Cypress testing concepts through 8 comprehensive tests covering login page validation, user interactions, and authentication flows. It demonstrates clean test structure, proper use of hooks, and essential Cypress commands.

## 📊 Test Coverage

**Test Suite:** Login Page

| Test # | Test Name | Purpose |
|--------|-----------|---------|
| 1 | should display correct page title | Validates browser tab title is "Swag Labs" |
| 2 | should display username and password fields | Verifies input fields are visible and empty |
| 3 | should display login button with correct text | Checks button visibility and label |
| 4 | should display test credentials on page | Validates credential hints are shown |
| 5 | should allow typing and clearing input fields | Tests field interaction capabilities |
| 6 | should show error when submitting empty form | Validates required field error message |
| 7 | should login successfully with valid credentials | Tests positive login scenario |
| 8 | should show error with invalid credentials | Tests negative login scenario |

**Total:** 8 automated tests covering login functionality

## 🛠️ Technologies Used

- **Cypress v13+** - Modern end-to-end testing framework
- **JavaScript** - Test scripting language
- **SauceDemo** - Demo e-commerce application for testing

## 📝 Key Cypress Commands Demonstrated

### Element Selection
```javascript
cy.get('#user-name')           // Select by ID
cy.get('[data-test="error"]')  // Select by data attribute
cy.contains('Login')           // Select by text content
```

### Assertions
```javascript
.should('be.visible')          // Element is visible
.should('eq', 'Swag Labs')     // Exact match
.should('contain', 'Login')    // Partial text match
.and('have.value', '')         // Chain multiple assertions
```

### Interactions
```javascript
cy.type('username')            // Type into input field
cy.click()                     // Click element
cy.clear()                     // Clear input field
cy.visit('url')                // Navigate to URL
```

### State Management
```javascript
beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
})
```

## 🚀 How to Run

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd saucedemo-basic-tests
```

2. **Install dependencies**
```bash
npm install
```

### Running Tests

**Open Cypress Test Runner (Interactive)**
```bash
npx cypress open
```
1. Select "E2E Testing"
2. Choose a browser
3. Click on `basic-tests.cy.js`

**Run Tests in Headless Mode**
```bash
npx cypress run
```

**Run Specific Test File**
```bash
npx cypress run --spec "cypress/e2e/basic-tests.cy.js"
```

### Expected Results
- ✓ All 8 tests should pass
- ✓ Average test duration: ~5-10 seconds
- ✓ No flaky tests (consistent results)

## 📁 Project Structure
```
saucedemo-basic-tests/
├── cypress/
│   ├── e2e/
│   │   └── basic-tests.cy.js      # Main test file
│   ├── support/
│   │   ├── commands.js             # Custom commands
│   │   └── e2e.js                  # Test configuration
│   └── fixtures/                   # Test data (if needed)
├── cypress.config.js               # Cypress configuration
├── package.json                    # Project dependencies
└── README.md                       # Documentation
```

## 🎯 Skills Demonstrated

### Testing Fundamentals
- Test organization with `describe` and `it` blocks
- Setup and teardown with `beforeEach` hooks
- Positive and negative test scenarios
- Clear, descriptive test naming

### Cypress Proficiency
- Element selection strategies (ID, attributes, text)
- Command chaining for readable tests
- Multiple assertion patterns
- Browser state management

### Quality Assurance Mindset
- Comprehensive coverage of login functionality
- Edge case testing (empty fields, invalid credentials)
- Consistent test structure
- Isolation between tests (no dependencies)

### Code Quality
- Clear, professional comments
- Logical test organization
- DRY principle with `beforeEach`
- Maintainable test code

## 💡 Custom Commands

The codebase includes a `cy.login()` custom command in `commands.js` for reusable login functionality:
```javascript
// Available custom command
cy.login('standard_user', 'secret_sauce')
```

## 🧪 Test Philosophy

These tests follow industry best practices:

- **Independent Tests** - Each test can run alone
- **Clean State** - `beforeEach` ensures fresh start
- **Clear Intent** - Test names describe what's being tested
- **Single Responsibility** - Each test validates one thing
- **No Hardcoded Waits** - Cypress handles timing automatically

## 📝 Notes

- **Application Under Test:** SauceDemo - A demo e-commerce site for testing
- **Test Credentials:** Available on the login page
- **Browser Compatibility:** Tested on Chrome, Firefox, Edge
- **Flakiness:** Zero flaky tests - all tests are stable

## 🔗 Related Projects

- [SauceDemo Intermediate Tests](link) - Data-driven testing with custom commands
- [Cypress E-Commerce Testing](link) - Page Object Model implementation
- [API Basic Testing](link) - REST API testing fundamentals

## 👤 Author

**Isrrael Andres Toro Alvarez**

- GitHub: [@tyraelw](https://github.com/tyraelw)
- LinkedIn: [Isrrael Toro Alvarez](https://linkedin.com/in/your-profile)
- Email: tyrael78w@gmail.com

## 📧 Contact

For questions about this project or Cypress testing patterns: tyrael78w@gmail.com

---

*Part of QA Testing Portfolio | November 2025*
