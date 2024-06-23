const Mongoose = require('mongoose');
const schema = Mongoose.Schema;

const estabSchema = new schema({
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    priceRange: { type: String, trim: true },
    category: { type: String, trim: true },
    lat: { type: Number },
    lng: { type: Number }



});

const Establecimientos = Mongoose.model('Establecimientos', estabSchema);
module.exports = 
    Establecimientos
;
