//const express = require('express'); --> //const personasRouter = express.Router();

const personasRouter = require('express').Router();
const Persona = require('../models/Persona');



personasRouter.get("/", (req, res, next) => {

    Persona.find({}).then(personas => {
            res.json(personas);
    })
    
    .catch (error => {

        next(error);
    })

});


personasRouter.get("/:id", (req, res, next) => {


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


personasRouter.delete("/:id", (req, res, next) => {

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



personasRouter.post("/", (req, res, next) => {

    const {nombre, edad} = req.body;

        const nuevaPersona = new Persona({
            nombre,
            edad,
        });

        nuevaPersona.save()

        .then(persona => res.json(persona))
        
        .catch( (error) => {

            next (error);
    
        })

});



personasRouter.put("/:id", (req, res, next) => {

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


module.exports = personasRouter;