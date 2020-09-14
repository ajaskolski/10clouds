export const Careers = {
    pageUrl: '/careers',
    jobOfferTitleClass: 'job-offer__title',

    verifyNumberOfJobOpenings(numberOfOpenings: number, jobTitle: string): void {
        cy.xpath(`//*[contains(@class, "${this.jobOfferTitleClass}") and text() ="${jobTitle}"]`).should(
            'have.length',
            numberOfOpenings,
        );
    },

    verifySearchReturnsJobsContainsSearchPhrase(jobTitle: string, searchPhrase: string): void {
        cy.get('input[placeholder="Search jobs..."]').type(searchPhrase);
        cy.get(`[class="${this.jobOfferTitleClass}"]`).each((el) => {
            expect(el.text()).to.be.eq(jobTitle);
        });
    },
};
