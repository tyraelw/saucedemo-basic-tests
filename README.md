# SauceDemo - Basic Cypress Tests

Foundational UI automation project demonstrating core Cypress commands, selectors, and assertion patterns using the SauceDemo login page.

## 📋 Project Overview

This project showcases fundamental Cypress testing concepts through 8 comprehensive tests covering login page validation, user interactions, and authentication flows. It demonstrates clean test structure, proper use of hooks, and essential Cypress commands.

## 🎯 Skills Demonstrated

This project demonstrates proficiency in:

- **Writing automated UI tests** using Cypress framework
- **Using CSS and attribute selectors** to locate elements (`#id`, `[data-test]`)
- **Chaining assertions** with `.should()` and `.and()` for comprehensive validation
- **Interacting with web elements** using `.type()`, `.click()`, and `.clear()`
- **Validating page content** with `.contains()` for text verification
- **Managing test state** with `beforeEach()` hooks
- **Clearing browser data** between tests (cookies, localStorage)
- **Testing positive and negative scenarios** (valid/invalid login attempts)
- **Verifying URL navigation** after successful actions
- **Structuring tests logically** with descriptive test names

## 📊 Test Coverage

### Test Suite: Login Page

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

**Total: 8 automated tests covering login functionality**

## 🛠️ Technologies Used

- **Cypress** v13+ - Modern end-to-end testing framework
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
- Select "E2E Testing"
- Choose a browser
- Click on `basic-tests.cy.js`

**Run Tests in Headless Mode**
```bash
npx cypress run
```

**Run Specific Test File**
```bash
npx cypress run --spec "cypress/e2e/basic-tests.cy.js"
```

### Expected Results
```
✓ All 8 tests should pass
✓ Average test duration: ~5-10 seconds
✓ No flaky tests (consistent results)
```

## 📁 Project Structure

```
saucedemo-basic-tests/
├── cypress/
│   ├── e2e/
│   │   └── basic-tests.cy.js      # Main test file
│   ├── support/
│   │   ├── commands.js             # Custom commands (for future use)
│   │   └── e2e.js                  # Test configuration
│   └── fixtures/                   # Test data (if needed)
├── cypress.config.js               # Cypress configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## 🎓 Skills Demonstrated

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

## 🔗 Related Projects

- [SauceDemo Intermediate Tests](../saucedemo-intermediate-tests) - Data-driven testing with custom commands
- [Cypress E-Commerce Testing](../cypress-ecommerce-testing) - Page Object Model implementation
- [API Basic Testing](../basic-api-testing) - REST API testing fundamentals

## 📌 Portfolio Context

This project is part of a structured portfolio demonstrating comprehensive UI automation expertise from fundamental patterns to advanced architectures. While my advanced projects like [Cypress E-Commerce Testing](../cypress-ecommerce-testing) showcase production-ready implementations with Page Object Model, CI/CD, and complex workflows, this collection focuses on clearly demonstrating core Cypress concepts that form the foundation of those advanced patterns.

**Focus Area:** Fundamental Cypress testing patterns
- Core commands and selectors
- Basic assertions and validations
- Test structure and organization
- Browser state management

**Related Skill Levels:**
- **Intermediate:** [SauceDemo Intermediate Tests](../saucedemo-intermediate-tests) - Custom commands, data-driven patterns
- **Advanced:** [Cypress E-Commerce Testing](../cypress-ecommerce-testing) - POM architecture, CI/CD, component testing

## 💡 Custom Commands

While this project intentionally uses native Cypress commands to demonstrate fundamentals clearly, the codebase includes a `cy.login()` custom command in `commands.js` for potential reuse:

```javascript
// Available but not used in basic tests
cy.login('standard_user', 'secret_sauce')
```

This shows awareness of code reusability patterns while keeping the test examples explicit and educational.

## 🧪 Test Philosophy

These tests follow industry best practices:

1. **Independent Tests** - Each test can run alone
2. **Clean State** - `beforeEach` ensures fresh start
3. **Clear Intent** - Test names describe what's being tested
4. **Single Responsibility** - Each test validates one thing
5. **No Hardcoded Waits** - Cypress handles timing automatically

## 📝 Notes

- **Application Under Test**: [SauceDemo](https://www.saucedemo.com/) - A demo e-commerce site for testing
- **Test Credentials**: Available on the login page
- **Browser Compatibility**: Tested on Chrome, Firefox, Edge
- **Flakiness**: Zero flaky tests - all tests are stable

## 📧 Contact

For questions about this project or Cypress testing patterns, feel free to reach out via [tyrael78w@gmail.com](mailto:tyrael78w@gmail.com)

---

**Part of QA Testing Portfolio** | **November 2025**
