const mongoose = require('mongoose');

const {model, Schema} = mongoose;


const personaSchema = new Schema({
        nombre : {type: String, required : true},
        edad : {type: Number, required : true, min : 18, max : 65}
});


// sirve para transformar una función
personaSchema.set('toJSON', {
    transform:( (document, personaToJSON) => {

        personaToJSON.id = personaToJSON._id.toString();
        delete personaToJSON._id;
        delete personaToJSON.__v;

    })
})

module.exports = model('Persona', personaSchema);
