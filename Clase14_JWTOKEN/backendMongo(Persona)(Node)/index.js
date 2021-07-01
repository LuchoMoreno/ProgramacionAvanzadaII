require('./db/mongo');

const {PORT} = require('./utils/config');

const express = require('express');

const app = express();

const cors = require("cors");

const { handlerError, logger} = require('./utils/middlewares');

const personasRouter = require('./routes/personasRouter');

app.use(cors());

app.use(express.json());

app.use(logger);


app.get("/", (req, res) => {

    res.send("<h1> API PERSONAS </h1>");

});


app.use('/api/personas', personasRouter);


app.use(handlerError);


app.listen(PORT, () => {

    console.log("Escuchando en el puerto: " + PORT);
});
