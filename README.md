# 23º Projeto: Blogs API
<p align="center">
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/23-BlogsAPI.jpg?raw=true" alt="Header" />
<hr/>
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#according-to-the-project-requirements-designated-by-trybe-i-did">Requirements</a> •
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

## Descrição do Projeto
Fiz este projeto BackEnd durante meu período de aprendizagem na Trybe onde desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog.<br>

Esta é uma aplicação em NodeJS que usa o pacote sequelize para fazer um CRUD de posts.

## Nesse projeto, aprendi e coloquei em prática:
- Desenvolvimento de endpoints que foram conectados ao banco de dados seguindo os princípios do REST;

<hr/>

## De acordo com os requisitos do projeto designados pela Trybe consegui desenvolver:
- ✅ Criar migrations para as entidades User, Categories, BlogPosts e PostCategories
- ✅ Criar o modelo 'User' em 'src/database/models/user.js' com as propriedades definidas
- ✅ Criar o endpoint POST /login
- ✅ Criar o endpoint POST /user
- ✅ Criar o endpoint GET /user
- ✅ Criar o endpoint GET /user/:id
- ✅ Criar o modelo 'Category' em 'src/database/models/category.js' com as propriedades definidas
- ✅ Criar o endpoint POST /categories
- ✅ Criar o endpoint GET /categories
- ✅ Criar o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações definidas
- ✅ Criar o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações definidas
- ✅ Criar o endpoint GET /post
- ❌ Criar o endpoint POST /post
- ❌ Criar o endpoint GET post/:id
- ❌ Criar o endpoint PUT /post/:id
- ❌ Criar o endpoint DELETE post/:id
- ❌ Criar o endpoint DELETE /user/me
- ❌ Criar o endpoint GET post/search?q=:searchTerm

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

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/express2.png?raw=true" width="50" height="50" alt="Express Icon" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<hr/>

## Como rodar a aplicação?
- O MySQL precisa estar rodando na sua máquina
- ⚠️ Se estiver no Windows, pare o MySQL do Windows, pois usará o MySQL da sua distro linux através do WSL2
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

</br>
</br>

_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_