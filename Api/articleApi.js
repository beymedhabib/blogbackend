var express =require('express');
var article = require('./../models/articleSchema');
var user =require('./../models/UserSchema')
var passport = require('passport');
var router = express.Router()
router.post('/add',passport.authenticate('bearer', {session:false}),(req,res)=>{
    article.create(req.body,(err,resultat)=>{
        if (err) {res.send(err);
        } else {
            res.send(resultat)
        }
    })
})
router.get('/get',(req,res)=>{
    article.find({},(err,resultat)=>{
        if (err) {
            res.send(err)
        } else {
            res.send(resultat)
        }
    })
})
router.delete('/delete/:id',(req,res)=>{
    article.findByIdAndRemove(req.params.id,(err,resultat)=>{
        if (err) {
            res.send(err)
        } else {
            res.send(resultat)
        }
    })
})
router.put('/update/:id',(req,res)=>{
    article.findByIdAndUpdate(req.params.id,req.body,(err,resultat)=>{
        if (err) {
            res.send(err)
        } else {
            res.send(resultat)
        }
    })
})
module.exports = router