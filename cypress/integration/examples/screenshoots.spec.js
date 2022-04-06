describe('Screenshoot', () => {
	it('should load website with select option', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
	})

	it('full page screenshoot', () => {
		cy.get('#preferred-interface').select('Both')
		cy.get('#preferred-interface').should('have.value', 'Both')

		cy.get('#preferred-interface').select('JavaScript API')
		cy.get('#preferred-interface').should('have.value', 'JavaScript API')

		cy.screenshot({ capture: 'fullPage' })
	})

	it('single elemnt screenshoot', () => {
		cy.get('#preferred-interface').select('Both')
		cy.get('#preferred-interface').should('have.value', 'Both')

		cy.get('#preferred-interface').select('JavaScript API')
		cy.get('#preferred-interface').should('have.value', 'JavaScript API')

		cy.get('#preferred-interface').screenshot()
	})
})
