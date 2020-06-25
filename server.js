var express = require("express");
var jsonparser = require("body-parser");
var db = require("./db/database");
var userapi = require("./Api/UserApi");
var upload = require("./Api/upload");
var article = require("./Api/articleApi");
var affect = require('./Api/affectApi')
var passport = require("./api/passport")


var cors = require('cors')
var path = require('path')
 
// var router = express.Router();
var app = express();

app.use(jsonparser.json({ limit: '50mb' }));
app.use(jsonparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cors()); 
app.use('/upload',express.static(path.join(__dirname, 'upload')));

app.use("/user",userapi);
app.use("/uploadimg",upload);
app.use("/article",article);
app.use("/affect",affect);

app.listen(3000);