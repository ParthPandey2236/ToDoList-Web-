
const express = require('express');

const port =8000;

const app =express();

const db = require('./config/mongoose');

const CollectionReference = require('./model/schema');

app.set('view engine','ejs');

app.set('views' , './views');


app.use(express.urlencoded());

app.use(express.static('./assets'))


app.use('/',require('./routes/home'));

app.listen(port,function(error){
    if(error){
        console.log("error while listening");
    }
    else{
        console.log("Listening Perfectly");
    }
})