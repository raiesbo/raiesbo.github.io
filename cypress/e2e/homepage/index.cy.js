beforeEach(() => {
    cy.visit('http://127.0.0.1:3001/')
})

describe('picture side', () => {
    it('has a main picture', () => {
        cy.get('#main-picture')
            .should('have.css', 'background-image', 'linear-gradient(to left, rgba(76, 158, 235, 0.8), rgba(6, 42, 75, 0.8)), url("http://127.0.0.1:3001/src/img/self_low.jpg")')
    })
    it('has a h1 title', () => {
        ""
    })
    it('has a main subLine', () => {
        ""
    })
    it('has SM links', () => {
        ""
    })
    it('has a main picture', () => {
        ""
    })
})

describe('information side', () => {
    it('has a main picture', () => {
        ""
    })
    it('has a button and access the portfolio with it', () => {
        cy.get('a.btn[href="https://raiesbo.com/"]').as('btn').should('exist');

    })
    it('has a main picture', () => {
        ""
    })
})


