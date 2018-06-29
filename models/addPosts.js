var Moment = require('moment');
var db = require('../dbConnections/config');
var addPosts = {
    addPosts: function (data, callback) {
        console.log(data,'models')
        var todayDate=Moment().format('YYYY-MM-DD HH:mm:ss')
        db.query("Insert posts set postTitle = ?,category = ?,description = ?,location = ?,name = ?,phone = ?,address = ?,email = ?,createdBy = ?,createdDate = ?",
        [data.addTitle,data.category,data.addDescription,data.location,data.name,data.phoneNumber,data.address,data.email,data.email,todayDate],function(err,res){
            if(err){
        
                callback({status:'err',code:'400',message:'not inserted'})
            }else{
                callback({status:'inserted',code:'200',message:'inserted successfully'})
               
            }
        });
    }
}

module.exports = addPosts;