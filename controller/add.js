const CollectionReference = require('../model/schema');

module.exports.add =function(req,res){
    // console.log(req);
  CollectionReference.create({
      Description: req.body.Description,
      Category : req.body.Category,
      Date  : req.body.Date,
  },function(error){
      if(error){
          return console.log("Error while posting data");
      }
      else{
           console.log("Posted Successfully");
      }
  });
  res.redirect('back');

}