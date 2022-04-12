/// <reference types="Cypress"/>
describe('REST API test', () => {
	it('API TEST headers', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')

		cy.get('@pokemon')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json')
	})
})
