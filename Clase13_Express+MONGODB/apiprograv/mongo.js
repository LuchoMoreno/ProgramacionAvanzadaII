// archivo que tiene que ver con la conexión a BD.

// vamos a usar mongoose.

const mongoose = require('mongoose');

const {connect} = mongoose;


// cualquier función async, retorna una promesa.
const conectarBD = async() =>{

    connect(process.env.DB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
};

conectarBD()

.then( result => {console.log("db conectada")})

.catch( error => console.log(error))