const CollectionReference = require('../model/schema');
module.exports.callback  = function (req,res){
    CollectionReference .find({},function(error,data){
        if(error){
            return console.log("Error while retrieving ");
        }
        // console.log(data);
        return res.render('../views/home.ejs',{details : data});
    })
}