const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();
require('express-async-errors');

app.use(express.json());

app.use('/', routes);
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
