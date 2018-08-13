var router = require('express').Router();
var StudiesListingController = require('../controllers/StudiesController')

/* This router contains all the routes to the studies listing pages and description

*/

router.get('/',(req,res)=>{
    res.redirect('/studies/listing')
})

router.get('/listing',StudiesListingController.listing)

router.get('/listing/:id',StudiesListingController.listing_description)


module.exports = router