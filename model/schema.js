const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    Description : {
        type : String,
        require : true,
    },
    Category : {
        type : String ,
        require : true,
    },
    Date : {
        type : String,
        require : true,
    }
});

const CollectionReference = mongoose.model('TimeLine',Schema);
module.exports = CollectionReference;