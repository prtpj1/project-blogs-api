const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Blogs API',
        description: 'API para a produção de conteúdo para um blog',
    },
    host: 'localhost:3000',
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'In the field <b>"Value"</b> paste the token '
                + 'generated by the <b>POST/login</b> endpoint',
        },
    },
};

const outputFile = './swagger.json';
const routes = ['../routes/index.js'];

swaggerAutogen(outputFile, routes, doc);