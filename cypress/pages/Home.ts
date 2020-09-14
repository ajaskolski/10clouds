export const Home = {
    clickTabCareers(): void {
        cy.get('.nav-link-container').find('a[href*=careers]').click();
    },
};
