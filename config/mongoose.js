const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ToDoList_db");

const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error while connecting to DB"));

db.once('open', function(){
    console.log("Open and running DB");
});