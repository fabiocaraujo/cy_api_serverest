# Cypress - API - Serverest
## Projeto de exemplo na API Serverest

### Serverest:

O ServeRest é um servidor REST que simula uma loja virtual com intuito de servir de material de estudos de testes de API.

Essa página documenta todas as rotas e como acessá-las: https://serverest.dev/ 

Para mais detalhes do ServeRest (como executar localmente, etc) acesse o GitHub do projeto.
Github: https://github.com/ServeRest/ServeRest

## Cenários de Testes automatizados

#### PRODUTOS
    ✓ Validar contrato de Produtos - SCHEMA

    ✓ Deve listar os produtos cadastrados - GET

    ✓ Deve inserir um produto novo - POST

    ✓ Deve inserir um produto novo - POST via AppActions

    ✓ Deve validar mensagem de erro ao cadastrar produto repetido - POST

    ✓ Deve alterar um produto cadastrado previamente - PUT

####  USUÁRIOS
    ✓ Deve validar o esquema do contrato - SCHEMA

    ✓ Deve listar todos os usuários cadastrado - GET

    ✓ Deve cadastrar usuário com sucesso - POST

    ✓ Deve cadastrar usuário com sucesso - POST via AppActions

    ✓ Deve alterar o usuário cadastrado previamente - PUT

    ✓ Deve deletar usuário cadastrado previamente - DELETE


## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto. Você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/fabiocaraujo/cy_api_serverest.git
```
```
cd cy_api_serverest
```

#### Para instalar as dependencias:
```
npm install 
```

#### Suba o ambiente localhost
```
npx run start
```
Ou

```
npx serverest
```

Após a execução, basta acessar a documentação http://localhost:3000/ 

IMPORTANTE: Não feche o terminal com a execução do Serverest enquanto estiver usando.

#### Para executar em moodo Headlesss, via console
```
npx cypress run
```

#### Para executarVia Dashboard
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Gerando relatórios

```
npm run cy:report  
```

Deve criar um arquivo "cypress/mochawesome-report/report.html. Basta abrir o arquivo com seu navegador preferido.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker

-Mochawesome Report, para geração de relatórios: https://www.npmjs.com/package/mochawesome 

### Boa diversão ;) 
Qualquer crítica ou sugestão é bem vinda! 



