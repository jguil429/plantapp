const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    common_name: String,
    scientific_name: String,
    native: Object,
    duration: String,
    edible: Boolean,
    habit: Object
});

module.exports = mongoose.model('Plant', PlantSchema);