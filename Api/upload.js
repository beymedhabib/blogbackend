const routes = require('express').Router();
const process = require('process');
const multer = require('multer');
var article = require('./../models/articleSchema')
var passport = require('passport');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + '/upload')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now().toString() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
    }
});
var upload = multer({ storage: storage });
routes.post('/:id',passport.authenticate('bearer', {session:false}), upload.single('file'), (req, res) => {
    var link = "http://localhost:3000/upload/"+ req.file.filename
    article.findByIdAndUpdate(req.params.id,{$set:{image:link}},(err,resultat)=>{
        if (err) {
            res.send(err)
        }
        res.send(resultat);
        console.log(resultat);
    })
})
module.exports = routes;