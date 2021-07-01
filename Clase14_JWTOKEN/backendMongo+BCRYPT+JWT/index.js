// npm i bcrypt
// npm i jsonwebtoken


// npm run -> Para iniciar, no se actualizan los cambios.
// npm run dev -> Para iniciar nodemon, que actualiza todo al toque.

require('./db/mongo');

const {PORT} = require('./utils/config');

const express = require('express');

const app = express();

const cors = require("cors");

const { handlerError, logger} = require('./utils/middlewares');

const personasRouter = require('./routes/personasRouter');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

app.use(cors());

app.use(express.json());

app.use(logger);


app.get("/", (req, res) => {

    res.send("<h1> API PERSONAS </h1>");

});


app.use('/api/login', loginRouter);

app.use('/api/users', usersRouter);

app.use('/api/personas', personasRouter);


app.use(handlerError);


app.listen(PORT, () => {

    console.log("Escuchando en el puerto: " + PORT);
});
