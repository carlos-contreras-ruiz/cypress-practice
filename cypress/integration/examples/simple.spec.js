// describe('Browser Actions', () => {
// 	it('Should load url', () => {
// 		cy.visit('https://example.com/', { timeout: 10000 })
// 	})

// 	it('should check url', () => {
// 		cy.url().should('include', 'example.com')
// 	})

// 	it('wait 3 seconds', () => {
// 		cy.wait(3000)
// 	})

// 	it('pause execution', () => {
// 		//Util para deugear
// 		//cy.pause()
// 	})

// 	it('should check element', () => {
// 		cy.get('h1').should('be.visible')
// 	})
// })

// describe('Browser Actions', () => {
// 	it('Should load books', () => {
// 		cy.visit('https://books.toscrape.com/', { timeout: 10000 })
// 		cy.url().should('include', 'toscrape.com')
// 		cy.log('URL visited before reload')
// 		cy.reload()
// 		cy.log('After reload')
// 	})

// 	it('should click travel', () => {
// 		cy.get('a').contains('Travel').click()
// 		cy.get('h1').contains('Travel')
// 	})

// 	it('Should display correct number of bookes', () => {
// 		cy.get('.product_pod').its('length').should('eq', 11)
// 	})
// })

describe('Working with inputs', () => {
	it('should override the current time', () => {
		const date = new Date(2020, 3, 10).getTime() //return a time stamp
		cy.clock(date)
		cy.log(date)
	})

	it('visit', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.clearCookies({ log: true })
		cy.clearLocalStorage('itemKey', { log: true })
		cy.title().should('include', 'Zero')
	})

	it('Should fill username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear().type('Username!!!')
		cy.contains('Sign in').click()
	})

	it('should display error', () => {
		cy.get('.alert-error').should('be.visible').and('contain', 'Login')
	})
})
