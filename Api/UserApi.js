var express = require("express");
var users = require("./../models/UserSchema")
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs")
// register
router.post("/register",(req,res)=>{
    users.create(req.body, (err, resultat) => {
                if (err) { res.send(err) };
                res.send(resultat);
            });
})
//login
router.post("/login",(req,res)=>{
    users.findOne({email: req.body.email},(err,resultat)=>{
        const verif = bcrypt.compareSync(req.body.password,resultat.password);
        if (err) {
            res.send(err);
        } else {
            if (verif === true) {
                var token = jwt.sign({
                    exp: Math.floor(Date.now()/1000)+(60*60),
                    data:resultat
                },'secret');
                res.send({access_token:token})
                console.log(token)
            } else {
                console.log('invalid');
            }
        }
    })
})
module.exports = router;
