describe('Scroll', () => {
	it('should load website with select option', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
	})

	it('Scroll to element', () => {
		cy.get('#submit-button').scrollIntoView()
	})
})
