/// <reference types="Cypress"/>
describe('REST API test', () => {
	it('API TESTbody', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')

		cy.get('@pokemon').its('body').should('include', { name: 'pikachu' })
	})
})
