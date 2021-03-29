<p align="center"><a href="https://targetit.com.br/" target="_blank"><img src="https://targetit.com.br/wp-content/themes/bones/library/images/logo.svg" width="400"></a></p>

## Sobre o teste

Construir um Web Service na Arquitetura REST, que no qual deverá ser possível realizar as seguintes ações:

1. *Autenticação (JWT)*
2. Criar Usuário
3. Editar Usuário
4. Deletar usuário (Logicamente)
5. Exibir dados do usuário
6. ~~Atribuição de Permissão~~

## Tecnologia utilizadas

- Linguagens: JS e PHP
- Front-End: Vue.js e Tailwind
- Back-End: Laravel
- Banco: MySql

## Requisitos

- Banco MySql, Node e Composer instalados na máquina.

## Instalação

Front: 
- npm install

Back:
- composer update
- php artisan key:generate
- Renomear o arquivo .env.example para .env e configurar com os dados de acesso a o banco de dados MySql
- php artisan migrate

## Como rodar

Front: npm run serve
- localhost:8000

Back: php artisan serve
- localhost:8080

## Sobre o projeto

No projeto foi construído o CRUD de usuarios, onde que no Back foi criado a API Restful para que o Front possa consumir essa API.

## Fluxo do projeto

- Back: route -> controller -> request -> resource -> service -> model
- Front: route -> page -> componentes -> vuex -> axios

## O que foi feito

- Layout agradável em TailwindCSS.
- SPA em Vue.js.
- API Restful em Laravel.
- CRUD Usuário.
- Validação de dados na inserção de dados no Back.
- Autenticação JWT no Back.

## Pendências

- O JWT foi construído no Back, mas falta ser implementado no Front.
- Responsividade no Layout.
- Retorno de falha na validação da requisição no Front.
- ACL.

## Melhorias

- Mascara para telefone.
- Campo de busca para filtrar usuários.
- Paginação da tabela de usuários.

## Observações

- O JWT foi desativado no Back para que o Front possa fazer as requisições, para ativar utilizar o middleware auth:sanctum na rota api.

## Questões

- Requisitos Funcionais

São os requisitos onde que o problema deve ser solucionado para que seja atendida as necessidades do projeto.

1. CRUD Usuário.
2. Autenticação do Usuário.
3. Controle de acessos.

- Requisitos Não Funcionais

São os requisitos onde que descreve como o problema será resolvido.

1. A tabela pode ficar extensa, então com a paginação da tabela de usuários terá melhor facilidade de manusear.
2. Quando for editar um usuário terá que buscar ele na tabela, então o campo de busca para filtragem de usuários o auxiliará.
3. Modelo de criptografia da senha do usuário.




