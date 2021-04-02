/// <reference types="cypress" />
import loginSchema from '../../contracts/login.contract'

describe('Deve fazer o Login - POST - @healthcheck', () => {
    it('Login POST com Payload', () => {
        cy.request({
            method: 'POST',
            url: '/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }
        })//.then(res => console.log(res.body.authorization))
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.duration).to.be.lessThan(7)
                expect(response.body.message).to.eq("Login realizado com sucesso")
                cy.log(response.body.authorization)
            })
    });

    it('Login usando App functions', () => {
        cy.login("fulano@qa.com", "teste").then((response) => {
            console.log(response)
        })
    });

    it('Teste de contrato de Login', () => {
        cy.login("fulano@qa.com", "teste")
            .should((response) => {
                return loginSchema.validateAsync(response.body)
            });
    });

});