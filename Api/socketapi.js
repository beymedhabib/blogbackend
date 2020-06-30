var express = require('express');
var router = express.Router();
var article = require('./../models/articleSchema');

router.put('/comment/:id',(req,res)=>{
 
  article.findByIdAndUpdate(req.params.id, {$push:{comment:req.body}},(err,Comment)=>{
    if (err) {
      res.send(err)
    } else {
      const io = req.app.get('io');
      io.emit('newComment', Comment)
      res.send(Comment)
    }
  })
})
router.get('/getcomment/:id',(req,res)=>{
  article.findById(req.params.id,(err,resultat)=>{
    if (err) {
      res.send(err);
    } else {
      res.send(resultat);
    }
  })
})
module.exports = router;

