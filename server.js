'use strict';
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cors = require('cors')

app.use(cors());
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var endpoint = "http://bayar6.eastus.cloudapp.azure.com/"

app.post('/api/initiate', jsonParser,  function (req, res) {

	

});

app.post('/initiate', function (req, res) {
    

});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});