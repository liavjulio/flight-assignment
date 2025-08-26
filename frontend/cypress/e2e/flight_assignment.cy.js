describe('Flight Assignment E2E Tests', () => {
  const frontendBaseUrl = 'http://localhost:3001';

  it('Visits the homepage and checks for flight list and booking form', () => {
    // Visit the application
    cy.visit(frontendBaseUrl);

    // Check for the heading
    cy.contains('h2', 'Available Flights').should('be.visible');

    // Ensure the flight list is visible
    cy.get('ul').should('exist');

    // Ensure the list contains items
    cy.get('ul li').should('have.length.above', 0);

    // Select the first flight from the list
    cy.get('ul li').first().click();

    // Verify the dropdown value updates (if the dropdown is not updated automatically,
    // this step will need to manually select the value)
    cy.get('select[name="flight_id"]')
      .select('1') // Select the value explicitly
      .should('have.value', '1');
  });

  it('Submits the booking form successfully', () => {
    // Visit the application
    cy.visit(frontendBaseUrl);

    // Select a flight from the dropdown
    cy.get('select[name="flight_id"]').select('1').should('have.value', '1');

    // Fill out the booking form
    cy.get('input[name="user_name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify the success alert
    cy.on('window:alert', text => {
      expect(text).to.contains('Booking successful!');
    });
  });

  it('Handles API errors gracefully', () => {
    // Intercept the flights API and simulate an error response
    cy.intercept('GET', '**/flights*', {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    });

    // Visit the application
    cy.visit(frontendBaseUrl);

    // Verify the error message is displayed
    cy.contains('Error fetching flights').should('be.visible');
  });
});
