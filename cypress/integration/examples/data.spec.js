describe('Write read a JSOn', () => {
	it('Should write data into JSOn', () => {
		cy.writeFile('log.json', contents, encoding)
	})
})
