const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    common_name: String,
    scientific_name: String,
    native_location: String,
    duration: String,
    edible: Boolean,
    // poisonous: Boolean,
    description: String
});

module.exports = mongoose.model('Plant', PlantSchema);