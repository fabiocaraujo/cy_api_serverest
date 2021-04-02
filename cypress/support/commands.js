import login from '../fixtures/login.json'

Cypress.Commands.add('login', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: '/login',
        body: {
            "email": usuario,
            "password": senha
        }
    })
})

Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        url: '/login',
        body: {
            email: login.email,
            password: login.password
        }
    }).then((response) => {
        return response.body.authorization
    }).then((log) =>{
        log= cy.log('Logado com ' + login.email)
    })
})
