describe('Example with custom commands', () => {
	it('Should try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password

			cy.login(username, password)
		})
	})
})
