import 'cypress-xpath';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            verifyUrl(url: string, timeout: number): Cypress.Chainable<Response>;
        }
    }
}
Cypress.Commands.add('verifyUrl', (url: string, timeout: number) => {
    cy.url({ timeout }).should('include', url);
});
