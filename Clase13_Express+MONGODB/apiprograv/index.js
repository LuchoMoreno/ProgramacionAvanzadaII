// con esto, pido que se ejecute el archivo. Estoy pidiendo la invocación.
require('dotenv').config();
require('./mongo');

// npm init -y (yes para que de si a todo)


// dependenvia dev
// npm i -D nodemon

// para ejecutar nodemon, metemos un dev en scrips. // ACA PARA EMPEZAR A EJECUTAR
// npm run dev // EJECUTA ESTO.


// ACÁ INSTALO EXPRESS.
// npm install express.

const express = require('express');

const Persona = require('./models/Persona');


const PORT = process.env.PORT || 3000;
const app = express();



/// no se encuentra dentro de node_modules, uso el path.

//const { handlerNotFound } = require("./middlewares")


// CORS
// npm , i, cors. Para que le podamos pegar desde index.html o desde otros lugares, comno cualquier api.
//const cors = require("cors");


const logger = (req, res, next ) => {

    //console.log(`Hay ${personas.length} personas en la lista`);
    return next();
}


app.use(cors());


// MIDLEWARE, es algo que no detiene el flujo de 
// datos, lo captura, lo modifica y lo hace seguir.

// debería usar lo que retorna el método json.
// esto parsea el body, agarra la data, lo va a reconocer, 
app.use(express.json());


// se ejecuta cuando realizo cualquier petición.
app.use(logger);



app.get("/", (req, res) => {

    res.send("<h1> API PERSONAS </h1>");

});


app.get("/api/personas", (req, res, next) => {

    Persona.find({}).then(personas => {
            res.json(personas);
    })
    
    .catch (error => {

        next(error);
    })

});


app.get("/api/personas/:id", (req, res, next) => {

    // poner Number ()
    const id = req.params.id;

    Persona.findById(id).then(persona => {

        if (persona){
            res.json(persona);
        }

        res.status(404).end();

    })

    .catch( error => {

        next(error);
    })

});


app.delete("/api/personas/:id", (req, res, next) => {

    const id = req.params.id;

    Persona.findByIdAndRemove(id)
    
    .then(result => {

        if (result){
            res.status(204).end();
        }
        res.status(404).end();
    })
    
    .catch( error => {

        next(error);
    })

});


//app.use(handlerNotFound);



app.post("/api/personas/", (req, res, next) => {

    //const body = req.body;
    const {nombre, edad} = req.body;

    if (nombre && edad){

        const nuevaPersona = new Persona({
            nombre,
            edad,
        });

        nuevaPersona.save()

        .then(persona => res.json(persona))
        
        .catch( (error) => {

            next (error);
    
        })

    }
    else
    {
        res.status(400);
    }
});


app.put("/api/personas/:id", (req, res, next) => {

    const id = req.params.id;
    const {nombre, edad} = req.body;

    if (!nombre || !edad) res.status(400).send({ error: "Falta uno o mas campos de la persona." }).end();

    const infoPersona = {nombre, edad}; 

    // el new:true es para que me devuelva el objeto actualizado
    Persona.findByIdAndUpdate(id, infoPersona, {new:true})
    
    .then(persona => {

        if (nombre)
        {
            infoPersona.nombre = nombre;
        }

        if (edad)
        {
            infoPersona.edad = edad;
        }

        res.json(persona);
        res.status(400).end();
    })

    .catch( error => {

        next (error);
    })
});


// midleware.
app.use((error, req, res, next) => {
    
            console.log(error.name);

            if (error.name === "CastError")
            {
                res.status(400).send({error : "Bad ID"});
            }
            else if (error.name === "SyntaxError")
            {
                res.status(400).send({error : "Syntax error"});
            }
            else
            {
                {
                    res.status(500).send({error : "Internal server error ID"});
                }
            }

            next(error);
})




app.listen(PORT, () => {

    console.log("Escuchando en el puerto: " + PORT);
});
