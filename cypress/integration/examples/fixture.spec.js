describe('Example with fixtures', () => {
	it('Should try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password

			cy.get('#user_login').type(username)
			cy.get('#user_password').type(password)

			cy.contains('Sign in').click()
		})
	})

	it('Keyboard press simulation', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')

		//simulate an enter
		cy.get('#searchTerm').type('Some text {enter}')
	})
})
