import login from '../fixtures/login.json'
var faker = require('faker');

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
    }).then((log) => {
        log = cy.log('Logado com ' + login.email)
    })
})

Cypress.Commands.add('getUsuario', () => {
    cy.request({
        method: 'GET',
        url: '/usuarios',
    }).then((response) => {
        return response.body.usuarios
    })
})

//cria usuários faker
var nomeFake = faker.name.findName()
var emailFake = faker.internet.email(nomeFake)
var senhaFake = faker.internet.password()

Cypress.Commands.add('cadastroUsuarioMaster', () => {
    cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
            nome: nomeFake,
            email: emailFake,
            password: senhaFake,
            administrador: "true"
        }
    }).should((response) => {
        expect(response.status).to.eq(201)
    })
})


