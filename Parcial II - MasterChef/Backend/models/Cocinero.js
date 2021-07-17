const mongoose = require('mongoose');

const {model, Schema} = mongoose;


const cocineroSchema = new Schema({
        nombre : {type: String, required : true},
        edad : {type: Number, required : true, min : 18, max : 65},
        especialidad : {type: String, required : true},
        cantidadTemp : {type: Number, required : true, min : 1, max : 100},
        favorito : {type: Boolean, required : true},
});


// sirve para transformar una función
cocineroSchema.set('toJSON', {
    transform:( (document, cocineroToJSON) => {

        cocineroToJSON.id = cocineroToJSON._id.toString();
        delete cocineroToJSON._id;
        delete cocineroToJSON.__v;

    })
})

module.exports = model('Cocinero', cocineroSchema);
