describe('Écran de login', () => {
    specify('doit pouvoir se connecter', () => {
        cy.visit(`/auth/login`)
        cy.get('input[name=email]')
            .type('bad@email.com')
        cy.get('input[name=password]')
            .type(`goodPassword{enter}`)
        cy.url().should('contains', '/auth')
    })
})
  