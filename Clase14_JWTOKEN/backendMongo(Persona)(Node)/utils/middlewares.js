const handlerNotFound = ( (req, res) => {

    res.status(404).json({error: "No existe ese recurso"})

});


const handlerError = ((error, req, res, next) => {
    
    console.log(error.name);

    if (error.name === "CastError")
    {
        res.status(400).send({error : error.name, message: error.message});
    }
    
    else if (error.name === "SyntaxError")
    {
        res.status(400).send({error : error.name, message: error.message});
    }

    else if (error.name === "ReferenceError")
    {
        res.status(400).send({error : error.name, message: error.message});
    }

    else if (error.name === "ValidationError")
    {
        res.status(400).send({error : error.name, message: error.message});
    }

    else
    {
         res.status(500).send({error : error.name, message: error.message});
    }

    next();
});


const logger = (req, res, next ) => {

    console.log(req.path);
    console.log(req.method);

    next();
}


module.exports = {
    handlerError,
    handlerNotFound,
    logger,
};
