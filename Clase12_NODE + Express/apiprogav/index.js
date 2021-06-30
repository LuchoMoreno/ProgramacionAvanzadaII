// npm init -y (yes para que de si a todo)


// dependenvia dev
// npm i -D nodemon

// para ejecutar nodemon, metemos un dev en scrips. // ACA PARA EMPEZAR A EJECUTAR
// npm run dev // EJECUTA ESTO.


// ACÁ INSTALO EXPRESS.
// npm install express.


// npm install uuidv4.
//const { uuid } = requiere ('uuidv4');

const shortid = require("shortid");

const express = require('express');

const PORT = 3000;
const app = express();


/// no se encuentra dentro de node_modules, uso el path.

const { handlerNotFound } = require("./middlewares")


// CORS
// npm , i, cors. Para que le podamos pegar desde index.html o desde otros lugares, comno cualquier api.

const cors = require("cors");


const logger = (req, res, next ) => {

    console.log(`Hay ${personas.length} personas en la lista`);
    return next();
}


let personas = [
    {id:1, nombre:"Lucho", edad:"20"},
    {id:2, nombre:"Analiaa", edad:"25"},
    {id:3, nombre:"Josecito", edad:"30"},
    {id:4, nombre:"Martin", edad:"35"},
];


// MIDLEWARE, es algo que no detiene el flujo de 
// datos, lo captura, lo modifica y lo hace seguir.

// debería usar lo que retorna el método json.
// esto parsea el body, agarra la data, lo va a reconocer, 
app.use(express.json());


// se ejecuta cuando realizo cualquier petición.
app.use(logger);


app.use(cors());


app.get("/", (req, res) => {

    res.send("<h1> API PERSONAS </h1>");

});


app.get("/api/personas", (req, res) => {

    // en express tengo .json, no voy a tener que parsear
    res.json(personas);

});


app.get("/api/personas/:id", (req, res) => {

    // poner Number ()
    const id = req.params.id;

    // comparto texto con number.
    const persona = personas.find(p => p.id == id);

    persona ?  res.json(persona) : res.status(404).end();

    //console.log(persona);

});


app.delete("/api/personas/:id", (req, res) => {

    const id = req.params.id;

    const indice = personas.findIndex((p) => p.id == id);

    if (indice != -1)
    {
        personas.splice(indice, 1);
        res.status(204).end();
    }

    res.status(404).end();

});



app.use(handlerNotFound);



app.post("/api/personas/", (req, res) => {

    //const body = req.body;
    const {nombre, edad} = req.body;

    if (nombre && edad){

        const newPerson = {
            id : shortid.generate(),
            nombre : nombre,
            edad : edad
        }

        personas.push(newPerson);
        res.status(201).json(newPerson);
    }
    
    res.status(400).end();

});


app.put("/api/personas/:id", (req, res) => {


    const id = req.params.id;
    const data = req.body;

    const persona = personas.find(p => p.id == id);

    if (persona)
    {

        for (const key in data) {
            if (Object.hasOwnProperty.call(persona, key)) {
                  persona[key] = data[key];       
            }
        }

        res.status(200).json(persona);
    }

    res.status(400).end();

});


app.listen(PORT, () => {

    console.log("Escuchando en el puerto: " + PORT);
});
