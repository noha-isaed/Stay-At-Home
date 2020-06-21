const express = require('express')
const router = express.Router()

router.get( "/" , function(req , res){
    res.render("log_in")
})

router.post( "/login" , function(req , res){
    res.render("profile")
})

router.get( "/sign" , function(req , res){
    res.render("sign_up")
})
module.exports = router;