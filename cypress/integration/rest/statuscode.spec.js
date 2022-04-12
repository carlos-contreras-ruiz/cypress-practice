/// <reference types="Cypress"/>
describe('REST API test', () => {
	it('API TEST status code', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')

		cy.get('@pokemon').its('status').should('equal', 200)
	})

	it('API TEST status code error', () => {
		cy.request({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/1000',
			failOnStatusCode: false,
		}).as('pokemon')

		cy.get('@pokemon').its('status').should('equal', 404)
	})
})
