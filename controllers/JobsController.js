/* TBD: 
-- check if user is logged in 
    
Done
-   Need to import the models for Jobs here and them display -- Done
    
    
 */
// import jobs data from databases
var Jobs = require('../models/Post')


exports.listing = (req,res)=>{
    Jobs.find({}).exec((err,data)=>{
        res.render('listing/jobs',{job_list:data})
    })
}


// Using regex to match posts 

exports.listing_search = (req,res)=>{
var query = req.body.search_query;
Jobs.find({theme:{$regex: query, $options:'i'}}).exec((err,data)=>{
    res.render('listing/jobs',{job_list:data})
})
}

exports.listing_description = (req,res)=>{
    res.send(' You have reached jobs description page ')
}

