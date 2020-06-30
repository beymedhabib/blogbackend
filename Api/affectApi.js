var express = require("express");
var user = require('./../models/UserSchema');
var article = require('./../models/articleSchema');
var router = express.Router();

router.put('/:id/:artid',(req,res)=>{
    user.findByIdAndUpdate(req.params.id, { $push: { article: req.params.artid } },(err, resultat)=>{
        if (err) {
            res.send(err)
        } else {
            res.send(resultat)
        }
    })
})
module.exports= router