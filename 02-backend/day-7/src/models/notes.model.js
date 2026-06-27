const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    description: String 
});

const noteModel = mongoose.model('notes', noteSchema);

module.exports = noteModel;

// database ko batana hota hai ki kis format me data store karenge. Yahi process jisme ham database ko batate hai ki kis format me ham data store karenge isi ko kehte hai schema ceate karna.
// Procees jisme ham database ko batate hai ki data kis format me store karege isi ko kehte hai schema create karna.
// schema hota hai ek kind of format 