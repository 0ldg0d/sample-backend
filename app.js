const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test',
        {
                useNewUrlParser: true,
                useUnifiedTopology: true
        }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "mongoDB connection error:"));


const adminRoutes = require('./routes/admin.js');
const shoproutes = require('./routes/shop.js');



const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shoproutes);

app.use((req, res) => {
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000 ,console.log("Server is listening on port: 3000"));