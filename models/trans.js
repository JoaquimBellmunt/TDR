const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
var autoIncrement = require('mongoose-auto-increment');


const Trans = new mongoose.Schema({
 
transId: Number,
tipus: String, //(transacció, creació de tasca, elimincació de tasca)
emisor:Number, //(Nom o Id del usuari que crea transacció)
receptor: Number, //(Nom o Id del usuari que rep transacció)
tasca:Number, //(Nom o Id del usuari que rep transacció)
preu: Number,
acceptada: Boolean,  //(True → Done, False → To be Done)
acabada: Boolean
});

//Trans.plugin(passportLocalMongoose);
// Trans.plugin(autoIncrement.plugin, { model: 'Trans', field: 'transId' });

module.exports = mongoose.model('Trans', Trans);