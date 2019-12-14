// Dependencies
var express = require("express"); 
var http = require("http");

// Set our port to 8080
var PORT = process.env.PORT || 8080;
var apiRoutes = require("./routes/apiRoutes")
var htmlRoutes = require("./routes/htmlRoutes")
// Create our server
var app = express()

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)
// Starts our server
app.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});
