import { Careers, Home } from '../pages';
import { timeout } from '../constants/timeout';

describe('validate careers page', () => {
    beforeEach(() => {
        cy.visit('');
    });
    it('should have exactly one QA opening job visible', () => {
        const countOpenings = 1;
        const jobTitle = 'QA Automation Engineer';

        Home.clickTabCareers();
        cy.verifyUrl(Careers.pageUrl, timeout.normalTimeout);
        Careers.verifyNumberOfJobOpenings(countOpenings, jobTitle);
    });

    it('should be able to find job opening by search', () => {
        const jobTitle = 'QA Automation Engineer';
        const phraseSearch = 'Automation';

        Home.clickTabCareers();
        cy.verifyUrl(Careers.pageUrl, timeout.normalTimeout);
        Careers.verifySearchReturnsJobsContainsSearchPhrase(jobTitle, phraseSearch);
    });
});
