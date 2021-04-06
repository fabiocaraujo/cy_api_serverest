/// <reference types="cypress" />
import loginSchema from '../../contracts/login.contract'

describe('LOGIN - Testes da API ServeRest', () => {

before(() => {
        cy.cadastroUsuarioMaster()
});
    it('Login POST com Payload', () => {
        cy.request({
            method: 'POST',
            url: '/login',
            body: {
                "email": "fabio@teste.com",
                "password": "teste"
            }
        })//.then(res => console.log(res.body.authorization))
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq("OK")
                expect(response.duration).to.be.lessThan(9)
                expect(response.body.message).to.eq("Login realizado com sucesso")
                cy.log(response.body.authorization)
            })
    });

    it('Login usando App functions', () => {
        cy.login("fabio@teste.com", "teste").then((response) => {
            console.log(response)
        })
    });

    it('Teste de contrato de Login', () => {
        cy.login("fabio@teste.com", "teste")
            .should((response) => {
                return loginSchema.validateAsync(response.body)
            });
    });

});