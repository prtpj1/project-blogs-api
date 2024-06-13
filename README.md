# 23º Projeto: Blogs API
<p align="center">
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/23-BlogsAPI.jpg?raw=true" alt="Header" />
<hr/>
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#according-to-the-project-requirements-designated-by-trybe-i-learned-how-to">Requirements</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>
<hr/>
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-consegui-desenvolver">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>
<hr/>

## Project Description
I created this BackEnd project during my learning period at Trybe, where I developed an API and a database for content production for a blog.<br>

This is a NodeJS application that uses the Sequelize package to perform CRUD operations on posts.


## In this project, I learned and put into practice:
- Development of endpoints connected to the database following REST principles;

<hr/>

## According to the project requirements designated by Trybe, I learned how to:
- ✅ Create migrations for the entities `User`, `Categories`, `BlogPosts` and `PostCategories`
- ✅ Create the `User` model in `src/database/models/user.js` with defined properties
- ✅ Create the `POST /login` endpoint
- ✅ Create the `POST /user` endpoint
- ✅ Create the `GET /user` endpoint
- ✅ Create the `GET /user/:id` endpoint
- ✅ Create the `Category` model in `src/database/models/category.js` with defined properties
- ✅ Create the `POST /categories` endpoint
- ✅ Create the `GET /categories` endpoint
- ✅ Create the `BlogPost` model in `src/database/models/blogPost.js` with defined properties and associations
- ✅ Create the `PostCategory` model in `src/database/models/postCategory.js` with defined properties and associations
- ✅ Create the `GET /post` endpoint
- ❌ Create the `POST /post` endpoint
- ❌ Create the `GET post/:id` endpoint
- ❌ Create the `PUT /post/:id` endpoint
- ❌ Create the `DELETE post/:id` endpoint
- ❌ Create the `DELETE /user/me` endpoint
- ❌ Create the `GET post/search?q=:searchTerm` endpoint

_*Note: In some projects, certain requirements were not completed due to the accelerated dynamics of the course, not because I didn't know how to do them. At the time, I just needed a little more time.*_
_*I haven't decided yet whether to leave it this way to demonstrate my progress during my learning or to complete the missing requirements from the course projects.*_
_*Feedback is welcome.*_

<hr/>

## Stacks
### BackEnd:
- Docker
- Express
- MySQL
- Node.js

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/express2.png?raw=true" width="50" height="50" alt="Express Icon" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<hr/>

## How to run the application?
- MySQL must be running on your machine <br>
⚠️ If you are on Windows, stop Windows' MySQL, as it will use MySQL from your Linux distro via WSL2
- Clone the repository: <br>
`git clone git@github.com:prtpj1/project-blogs-api.git`
- Access the project folder: <br>
`cd project-blogs-api`
- Install dependencies: <br>
`npm install`
- Create the "**.env**" file at the root of the project with the following data: <br>
```
    HOSTNAME='localhost'
    MYSQL_PORT='3306'
    MYSQL_DB_NAME='blogs-api'
    MYSQL_USER='root'
    MYSQL_PASSWORD='your-mysql-password'
    JWT_SECRET='secret'
```
- Create the database and migrations: <br>
`npm run prestart`
- Populate the database: <br>
`npm run seed`
- In the terminal, start the application: <br>
`npm start`

With the project running, you can test the routes by clicking on the [Swagger](http://localhost:3000/api-docs/) link.
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Swagger_BlogsAPI.png?raw=true" alt="Swagger image" />
⚠️ **In this app, the route requires token authentication, which is done in the Swagger link above, but you need to follow the steps below:**
1. Open the route `POST/user/` and click the `Try it out` button
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_01.png?raw=true" alt="Example image to show how to authorize user using swagger" />
2. Fill in the fields with the new user data (they don't have to be real data)
3. Click the `Execute` button
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_02.png?raw=true" alt="Example image to show how to authorize user using swagger" />
4. If everything went well, your user was created, you will see the `201` code and the authorization token was generated.
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_03.png?raw=true" alt="Example image to show how to authorize user using swagger" />
The token should be something like this: 
```
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo4LCJkaXNwbGF5TmFtZSI6IkZ1bGFubyBkYSBTaWx2YSIsImVtYWlsIjoiZnVsYW5vQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGh2elo2elE3eEtDLk1PZ2VKUjQ2RXV2Z3I2YmMyT2pLWnZkUnlNc2FrSUpISWMvN2VvUTEyIiwiaW1hZ2UiOiJ3d3cucGljdHVyZS5wbmcifSwiaWF0IjoxNzE4MzA5NDIwLCJleHAiOjE3MTgzOTU4MjB9.gRMp60cD1GSAZwGVaSsfSj2kVxt8_3ZydNvoCY3J22A"
    }
```
 If something goes wrong, the error code and message will be displayed below there _(name too short, password too short or not numeric, etc...)_  
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_04.png?raw=true" alt="Example image to show how to authorize user using swagger" />

5. Copy only the text between the quotes after `"token":`
6. At the top of the screen, click the `Authorize` button, in `Value` paste the token text you copied and click the `Authorize` button, then close the modal by clicking `Close`
7. Now you can access all other routes as they are authorized.

</br>
</br>

_*Note: If you have any difficulty with the instructions and want to provide feedback, send me a message*_

<hr/>

## Descrição do Projeto
Fiz este projeto BackEnd durante meu período de aprendizagem na Trybe onde desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog.<br>

Esta é uma aplicação em NodeJS que usa o pacote sequelize para fazer um CRUD de posts.

## Nesse projeto, aprendi e coloquei em prática:
- Desenvolvimento de endpoints que foram conectados ao banco de dados seguindo os princípios do REST;

<hr/>

## De acordo com os requisitos do projeto designados pela Trybe consegui desenvolver:
- ✅ Criar migrations para as entidades `User`, `Categories`, `BlogPosts` e `PostCategories`
- ✅ Criar o modelo `User` em `src/database/models/user.js` com as propriedades definidas
- ✅ Criar o endpoint `POST /login`
- ✅ Criar o endpoint `POST /user`
- ✅ Criar o endpoint `GET /user`
- ✅ Criar o endpoint `GET /user/:id`
- ✅ Criar o modelo `Category` em `src/database/models/category.js` com as propriedades definidas
- ✅ Criar o endpoint `POST /categories`
- ✅ Criar o endpoint `GET /categories`
- ✅ Criar o modelo `BlogPost` em `src/database/models/blogPost.js` com as propriedades e associações definidas
- ✅ Criar o modelo `PostCategory` em `src/database/models/postCategory.js` com as propriedades e associações definidas
- ✅ Criar o endpoint `GET /post`
- ❌ Criar o endpoint `POST /post`
- ❌ Criar o endpoint `GET post/:id`
- ❌ Criar o endpoint `PUT /post/:id`
- ❌ Criar o endpoint `DELETE post/:id`
- ❌ Criar o endpoint `DELETE /user/me`
- ❌ Criar o endpoint `GET post/search?q=:searchTerm`

_*OBS: Em alguns projetos alguns requisitos não foram feitos devido a dinamica acelerada do curso e não por eu não saber como fazê-los. Na época eu apenas precisaria de um pouco mais de tempo.*_

_*Ainda não decidi se é melhor deixar desta forma para demonstrar o meu progresso durante meu aprendizado ou se seria melhor completar os requisitos que ficaram faltando nos projetos do curso.*_

_*Feedbacks são bem vindos.*_

<hr/>

## Tecnologias Utilizadas
### BackEnd:
- Docker
- Express
- MySQL
- Node.js

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/express2.png?raw=true" width="50" height="50" alt="Express Icon" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<hr/>

## Como rodar a aplicação?
- O MySQL precisa estar rodando na sua máquina <br>
⚠️ Se estiver no Windows, pare o MySQL do Windows, pois usará o MySQL da sua distro linux através do WSL2
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/project-blogs-api.git`
- Acesse a pasta do projeto: <br>
`cd project-blogs-api`
- Instale as dependências: <br>
`npm install`
- Crie o arquivo "**.env**" na raiz do projeto com os seguintes dados: <br>
```
    HOSTNAME='localhost'
    MYSQL_PORT='3306'
    MYSQL_DB_NAME='blogs-api'
    MYSQL_USER='root'
    MYSQL_PASSWORD='sua-senha-mysql'
    JWT_SECRET='secret'
```
- Crie o banco de dados e as migrations: <br>
`npm run prestart`
- Popule o banco de dados: <br>
`npm run seed`
- No terminal inicie a aplicação: <br>
`npm start`

Com o projeto rodando você poderá testar as rotas clicando no link do [Swagger](http://localhost:3000/api-docs/)
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Swagger_BlogsAPI.png?raw=true" alt="Tela do Swagger" />
⚠️ **Neste app a rota precisa de autenticação via token que é feita na própria rota do Swagger linkado acima, mas é preciso seguir alguns passos:**
1. Abra a rota `POST/user/` e clique no botão `Try it out`
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_01.png?raw=true" alt="Imagem para demonstrar como criar um novo usuário autorizado e poder utilizar o swagger" />
2. Preencha os campos com os dados do novo usuário (não precisam ser dados reais)
3. Clique no botão `Execute`
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_02.png?raw=true" alt="Imagem para demonstrar como criar um novo usuário autorizado e poder utilizar o swagger" />
4. Se tudo correu bem, o seu usuário foi criado, você verá o código 201 e foi gerado o token de autorização.
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_03.png?raw=true" alt="Imagem para demonstrar como criar um novo usuário autorizado e poder utilizar o swagger" />
O token deve ser algo parecido com este: 
```
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo4LCJkaXNwbGF5TmFtZSI6IkZ1bGFubyBkYSBTaWx2YSIsImVtYWlsIjoiZnVsYW5vQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGh2elo2elE3eEtDLk1PZ2VKUjQ2RXV2Z3I2YmMyT2pLWnZkUnlNc2FrSUpISWMvN2VvUTEyIiwiaW1hZ2UiOiJ3d3cucGljdHVyZS5wbmcifSwiaWF0IjoxNzE4MzA5NDIwLCJleHAiOjE3MTgzOTU4MjB9.gRMp60cD1GSAZwGVaSsfSj2kVxt8_3ZydNvoCY3J22A"
    }
```
 Caso algo de errado, será exibido o código do erro e a mensagem de erro _*(nome muito curto, senha muito curta ou não numérica, etc...)*_ 
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/swagger_example_04.png?raw=true" alt="Imagem para demonstrar como criar um novo usuário autorizado e poder utilizar o swagger" />

5. Copie somente o texto que está entre aspas após `"token":`
6. No topo da tela clique no botão `Authorize`, em `Value` cole o texto do token que você copiou e clique no botão `Authorize` e feche o modal clicando em `Close`
7. Agora você pode acessar todas as outras rotas, pois já estão autorizadas.

</br>
</br>

_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_