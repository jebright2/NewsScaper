var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 5000;

var app = express();

var router = express.Router();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Mongoose connection to database
mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Mongoose connection is successful!");
    }
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT + "!");
});