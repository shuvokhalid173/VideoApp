/// Bismillahhirrahmanirrahim ///

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path'); 
const api = require('./server/routes/api');
const app = express();
const mongoose = require('mongoose'); 

mongoose
    .connect('mongodb://localhost/VideoStore')
    .then(() => console.log('succesfully connected'))
    .catch(err => console.log(err));


app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , 'dist/AngularMaterial')));

app.use('/api/videos', api);

app.get('*' , (req , res , next) => {
    res.sendFile(path.join(__dirname ,'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`Listening at port ${port}`);
})