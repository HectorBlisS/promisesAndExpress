const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const port = 3000;
require('hbs');

mongoose.connect('mongodb://localhost:27017/detox', { useNewUrlParser: true }, (err)=>{
    if(err) return console.log('Error: ', err)
    console.log('conectado a DB')
});

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


//rutas
app.get('/', (req,res)=>{
    res.render('home')
});

const foodRoutes = require('./routes/food');
app.use('/food', foodRoutes);

app.listen(port, ()=>{
    console.log('corriendo en el 3000')
});