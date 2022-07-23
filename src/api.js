const express = require('express');

const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();
require('express-async-errors');

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', authRouter);
app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
