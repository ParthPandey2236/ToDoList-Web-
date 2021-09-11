const CollectionReference = require('../model/schema');
module.exports.dle= function(req,res){
    //  console.log(req.body);
    //  for(let i of req.body.checkboxValue){
    //       CollectionReference.findByIdAndDelete(i,function(error){
    //         if(error){
                
    //             console.log("error while deleting");
                
    //         }
    //     });
    // }
    // return res.redirect('back');
    CollectionReference.deleteMany({ _id: { $in: req.body.checkboxValue } })
    .then(() => { return res.redirect('back');})
    .catch((error)=>{console.log(error);});


}