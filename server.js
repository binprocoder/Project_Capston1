var dotenv = require("dotenv");
dotenv.config()
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 666;
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hi VuTien!</h1>");
}
)

app.use(function (err, req, res, next) {
    res.status(500).send(err)
})
app.listen(port, () => { 
    console.log("Chào mừng bạn đến với Backend"); 
})