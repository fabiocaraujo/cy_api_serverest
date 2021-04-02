/// <reference types="cypress" />
import produtosSchema from '../../contracts/produtos.contract'
var faker = require('faker/locale/pt_BR')

//Gera dados Faker
var produto = faker.commerce.product();
var preco = faker.commerce.price();
var descricao = faker.commerce.productDescription(produto);
var quantidade = faker.random.number(999);

describe('Produtos', () => {
    let token
    before(() => { 
        cy.token()
            .then(t => {
                token = t
            })
    });

    it('Deve listar os produtos cadastrados - GET', () => {
        cy.request({
            url: '/produtos',
            method: 'GET'
        }).should((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            expect(response.body.produtos[0].nome).contains("Logitech MX Vertical", "Mouse bom", 470);
        })
    });

    it('Validar contrato de Produtos - CONTRACT', () => {
        cy.request({
            url: '/produtos',
            method: 'GET'
        }).should((response) => {
            return produtosSchema.validateAsync(response.body)
        });
    });

    it('Deve inserir produto - POST', () => {
        cy.request({
            url: '/produtos',
            method: 'POST',
            headers: { authorization: token },
            body:
            {
                nome: produto,
                preco: preco,
                descricao: descricao,
                quantidade: quantidade
            }
        }).should((response) => {
            expect(response.status).to.eq(201);
            cy.log(response.body.produtos)
        })
    });

    it('POST - Deve validar mensagem de erro ao cadastrar produto repetido', () => {
        cy.token()
            .then(token => {
                cy.request({
                    url: '/produtos',
                    method: 'POST',
                    headers: { authorization: token },
                    body:
                    {
                        nome: produto,
                        preco: preco,
                        descricao: descricao,
                        quantidade: quantidade
                    },
                    failOnStatusCode: false // configuração para deixar o cypress entender o cenário de falha
                }).should((response) => {
                    expect(response.status).to.eq(400);
                    console.log(response.body)
                    expect(response.body.message).contains("Já existe produto com esse nome");
                })
            })
    });

});

