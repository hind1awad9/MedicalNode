const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname + '/public')))
app.use(cors())

app.use('/api/product', require('./routes/product'));
app.use('/api/invoice', require('./routes/invoice'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));


app.listen(80, () => {
    console.log('server running');
    mongoose.connect('mongodb://localhost:27017/MedicalInvoices', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err))
    mongoose.set('useCreateIndex', true)
})