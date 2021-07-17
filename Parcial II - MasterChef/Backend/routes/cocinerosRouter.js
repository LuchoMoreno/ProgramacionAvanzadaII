//const express = require('express'); --> //const cocinerosRouter = express.Router();

const cocinerosRouter = require('express').Router();
const Cocinero = require('../models/Cocinero');
const { verifyToken } = require('../utils/middlewares');



// ESTO VERIFICA QUE EXISTA UN TOKEN VÁLIDO.

// desmarcame para que el token funcione
cocinerosRouter.use(verifyToken);


// Desde insomnia, para realizar una petición, ir a "headers" y poner:
// "Authorization" --> "Bearer + token"

cocinerosRouter.get("/", (req, res, next) => {

    Cocinero.find({}).then(cocineros => {
            res.json(cocineros);
    })
    
    .catch (error => {

        next(error);
    })

});


cocinerosRouter.get("/:id", (req, res, next) => {

    const id = req.params.id;

    Cocinero.findById(id).then(cocinero => {

        if (cocinero){
            res.json(cocinero);
        }

        res.status(404).end();

    })

    .catch( error => {

        next(error);
    })

});


cocinerosRouter.delete("/:id", (req, res, next) => {

    const id = req.params.id;

    Cocinero.findByIdAndRemove(id)
    
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


cocinerosRouter.post("/", (req, res, next) => {

    const {nombre, edad, especialidad, cantidadTemp, favorito} = req.body;

        const nuevoCocinero = new Cocinero({
            nombre,
            edad,
            especialidad,
            cantidadTemp,
            favorito
        });

        nuevoCocinero.save()

        .then(cocinero => res.json(cocinero))
        
        .catch( (error) => {
            next (error);
        })

});



cocinerosRouter.put("/:id", (req, res, next) => {

    const id = req.params.id;

    const {nombre, especialidad, edad, cantidadTemp, favorito} = req.body;

    if (!nombre || !edad || !especialidad || !cantidadTemp) res.status(400).send({ error: "ERROR: Faltan campos del cocinero." }).end();

    const infoCocinero = {nombre, especialidad, edad, cantidadTemp, favorito}; 

    // el new:true es para que me devuelva el objeto actualizado
    Cocinero.findByIdAndUpdate(id, infoCocinero, {new:true}).then(cocinero => {

        if (nombre)
        {
            infoCocinero.nombre = nombre;
        }

        if (especialidad)
        {
            infoCocinero.especialidad = especialidad;
        }

        if (edad)
        {
            infoCocinero.edad = edad;
        }

        if (cantidadTemp)
        {
            infoCocinero.cantidadTemp = cantidadTemp;
        }

        if (favorito)
        {
            infoCocinero.favorito = favorito;
        }

        res.json(cocinero);
        res.status(400).end();
    })

    .catch( error => {

        next (error);
    }) 

});


module.exports = cocinerosRouter;