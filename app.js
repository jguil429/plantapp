const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Plant = require('./models/plant');

mongoose.connect('mongodb://localhost:27017/plantapp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/addplant', async (req, res) => {
    const plant = new Plant({common_name: 'Pineland Hibiscus',
        scientific_name: 'Hibiscus aculeatus',
        native_location: "North Carolina to east Texas and Arkansas, mostly in coastal areas and along rivers.",
        duration: 'Perennial',
        edible: null,
        // poisonous: Boolean,
        description: 'Valued for its attractive flowers, this small-statured mallow blooms in summer and fall. Its flowers are cream colored with a dark red center, the petals appearing pleated with scalloped edges. In moist garden soil, it can live up to 6 years and attain a height of up to 6 bushy feet, though 3 feet is more common.'});
    await plant.save();
    res.send(plant);
});

app.listen(3000, () => {
    console.log('Port 3000')
});