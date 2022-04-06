describe('Select Box', () => {
	it('should load website with select option', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
	})

	it('should seelect option', () => {
		cy.get('#preferred-interface').select('Both')
		cy.get('#preferred-interface').should('have.value', 'Both')

		cy.get('#preferred-interface').select('JavaScript API')
		cy.get('#preferred-interface').should('have.value', 'JavaScript API')
	})
})
